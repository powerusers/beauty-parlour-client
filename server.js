const express = require("express");
const cors = require("cors");
const path = require("path");
const { pool, initDB } = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

// Serve static frontend build
app.use(express.static(path.join(__dirname, "dist")));

// Serve PWA files (sw.js must be at root scope for full-site control)
app.use(express.static(path.join(__dirname, "public")));

// ─── API ROUTES (read-only + booking creation) ─────────────────────

// --- Settings (read-only) ---
app.get("/api/settings", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM settings LIMIT 1");
    res.json(rows[0] || { parlour_name: "Glow & Grace", parlour_open: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// --- Services (read-only, active only) ---
app.get("/api/services", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM services WHERE active = true ORDER BY category, name");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// --- Hours (read-only) ---
app.get("/api/hours", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM hours ORDER BY CASE day WHEN 'Sunday' THEN 0 WHEN 'Monday' THEN 1 WHEN 'Tuesday' THEN 2 WHEN 'Wednesday' THEN 3 WHEN 'Thursday' THEN 4 WHEN 'Friday' THEN 5 WHEN 'Saturday' THEN 6 END");
    const hoursObj = {};
    rows.forEach(r => { hoursObj[r.day] = { open: r.is_open, start: r.start_time, end: r.end_time }; });
    res.json(hoursObj);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// --- Bookings (read for slot availability + create) ---
app.get("/api/bookings", async (req, res) => {
  try {
    const { date } = req.query;
    let query = "SELECT id, date, start_time, total_duration, status FROM bookings WHERE status != 'cancelled'";
    let params = [];
    if (date) {
      query += " AND date = $1";
      params = [date];
    }
    query += " ORDER BY start_time";
    const { rows } = await pool.query(query, params);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/bookings", async (req, res) => {
  try {
    const { client_name, client_phone, services, date, start_time, total_duration } = req.body;
    const id = "b" + Math.random().toString(36).substr(2, 8) + Date.now().toString(36);
    const { rows } = await pool.query(
      `INSERT INTO bookings (id, client_name, client_phone, services, date, start_time, total_duration, status) VALUES ($1,$2,$3,$4,$5,$6,$7,'confirmed') RETURNING *`,
      [id, client_name, client_phone, services, date, start_time, total_duration]
    );
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// SPA fallback
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const PORT = process.env.PORT || 3001;

initDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Client Booking App running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to initialize database:", err);
    process.exit(1);
  });
