import React, { useState, useEffect } from 'react';

const injectCSS = () => {
  if (document.getElementById("cl-css")) return;
  const s = document.createElement("style");
  s.id = "cl-css";
  s.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Nunito+Sans:wght@300;400;500;600;700&display=swap');
    :root {
      --bg:#FFFBF7;--card:#FFF;--text:#3D2B1F;--text2:#8B7260;--text3:#C4AD9A;
      --rose:#C26E5A;--rose2:#D4896F;--rose-s:#FFF0E8;--rose-bg:#FFF7F2;
      --green:#5D8A6B;--green-bg:#EAF5EC;--red:#C25A5A;--red-bg:#FDECEC;
      --bdr:#F2E8DF;--bdr2:#E8D9CC;
      --fd:'Cormorant Garamond',Georgia,serif;--fb:'Nunito Sans',-apple-system,sans-serif;
      --rad:20px;--rads:14px;--radx:8px;--mw:460px;
      --sh:0 2px 20px rgba(61,43,31,0.05);
    }
    *{box-sizing:border-box;margin:0;padding:0;}
    .cla{font-family:var(--fb);color:var(--text);max-width:var(--mw);margin:0 auto;min-height:100vh;background:var(--bg);position:relative;overflow-x:hidden}
    .cla input,.cla select,.cla button{font-family:var(--fb)}
    .sp{position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(165deg,#FFFBF7 0%,#FFF0E8 40%,#FFE4D4 100%);animation:spo .5s ease 2.4s forwards}
    .sp-i{font-size:56px;animation:spp .6s cubic-bezier(.34,1.56,.64,1) .3s both;filter:drop-shadow(0 8px 24px rgba(194,110,90,.25))}
    .sp-n{font-family:var(--fd);font-size:32px;font-weight:600;margin-top:16px;animation:spu .5s ease .6s both;letter-spacing:.5px}
    .sp-t{font-size:11px;color:var(--text2);letter-spacing:3px;text-transform:uppercase;margin-top:6px;animation:spu .5s ease .8s both;font-weight:600}
    .sp-b{width:48px;height:3px;border-radius:2px;background:var(--rose);margin-top:24px;animation:spu .5s ease 1s both;opacity:.4}
    @keyframes spp{from{transform:scale(0) rotate(-20deg);opacity:0}to{transform:scale(1) rotate(0);opacity:1}}
    @keyframes spu{from{transform:translateY(16px);opacity:0}to{transform:translateY(0);opacity:1}}
    @keyframes spo{to{opacity:0;pointer-events:none}}
    .hdr{padding:24px 24px 16px;text-align:center}
    .hdr-n{font-family:var(--fd);font-size:26px;font-weight:600}
    .hdr-n em{color:var(--rose);font-style:normal}
    .hdr-sub{font-size:11px;color:var(--text3);letter-spacing:2.5px;text-transform:uppercase;margin-top:4px;font-weight:600}
    .sts{margin:0 20px 16px;padding:12px 16px;border-radius:var(--rads);display:flex;align-items:center;gap:10px;font-size:13px;font-weight:600}
    .sts.op{background:var(--green-bg);color:var(--green)}
    .sts.cl{background:var(--red-bg);color:var(--red)}
    .sts-dot{width:8px;height:8px;border-radius:50%;flex-shrink:0}
    .sts.op .sts-dot{background:var(--green);animation:pulse 2s infinite}
    .sts.cl .sts-dot{background:var(--red)}
    @keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}
    .prg{display:flex;gap:4px;padding:0 20px;margin-bottom:20px}
    .prg-s{flex:1;text-align:center}
    .prg-bar{height:3px;border-radius:2px;margin-bottom:6px;transition:background .3s}
    .prg-l{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;transition:color .3s}
    .cats{display:flex;gap:6px;padding:0 20px;overflow-x:auto;margin-bottom:16px;-webkit-overflow-scrolling:touch}
    .cats::-webkit-scrollbar{display:none}
    .cat{padding:7px 14px;border:1.5px solid var(--bdr);border-radius:18px;font-size:12px;font-weight:600;cursor:pointer;white-space:nowrap;transition:all .2s;background:var(--card);color:var(--text2)}
    .cat.on{background:var(--rose);border-color:var(--rose);color:#fff}
    .crd{background:var(--card);border-radius:var(--rad);padding:20px;margin:0 20px 16px;box-shadow:var(--sh);border:1px solid var(--bdr);animation:ci .35s ease both}
    @keyframes ci{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
    .crd-t{font-family:var(--fd);font-size:20px;font-weight:600;margin-bottom:16px}
    .crd-st{font-size:11px;color:var(--text3);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:12px;font-weight:700}
    .svc{display:flex;align-items:center;gap:12px;padding:14px 16px;border-radius:var(--rads);border:2px solid var(--bdr);cursor:pointer;transition:all .2s;margin-bottom:8px}
    .svc:last-child{margin-bottom:0}
    .svc:hover{border-color:var(--rose-s);background:var(--rose-bg)}
    .svc.on{border-color:var(--rose);background:var(--rose-s)}
    .svc-ic{width:40px;height:40px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;transition:all .2s}
    .svc-inf{flex:1;min-width:0}
    .svc-nm{font-weight:600;font-size:14px}
    .svc-dur{font-size:12px;color:var(--text2);margin-top:2px;display:flex;align-items:center;gap:4px}
    .svc-chk{width:22px;height:22px;border-radius:50%;border:2px solid var(--bdr);flex-shrink:0;display:flex;align-items:center;justify-content:center;transition:all .2s;font-size:12px;color:transparent}
    .svc.on .svc-chk{background:var(--rose);border-color:var(--rose);color:#fff}
    .bbar{position:sticky;bottom:0;left:0;right:0;background:var(--card);border-top:1px solid var(--bdr);padding:16px 20px;box-shadow:0 -4px 20px rgba(0,0,0,.06);z-index:10}
    .bbar-info{font-size:14px;font-weight:600;margin-bottom:12px;text-align:center;color:var(--text2)}
    .bbar-info strong{color:var(--rose);font-size:16px}
    .btn{width:100%;padding:14px;border:none;border-radius:var(--rads);font-size:15px;font-weight:600;cursor:pointer;transition:all .2s;display:flex;align-items:center;justify-content:center;gap:8px}
    .btn-p{background:linear-gradient(135deg,var(--rose),var(--rose2));color:#fff;box-shadow:0 4px 16px rgba(194,110,90,.3)}
    .btn-p:hover{transform:translateY(-1px);box-shadow:0 6px 20px rgba(194,110,90,.4)}
    .btn-p:disabled{opacity:.45;cursor:not-allowed;transform:none;box-shadow:none}
    .btn-o{background:transparent;color:var(--text);border:2px solid var(--bdr)}
    .btn-s{background:var(--rose-s);color:var(--rose)}
    .dscr{display:flex;gap:8px;overflow-x:auto;padding:4px 0;margin-bottom:16px;-webkit-overflow-scrolling:touch}
    .dscr::-webkit-scrollbar{display:none}
    .dchip{display:flex;flex-direction:column;align-items:center;padding:10px 14px;border-radius:var(--rads);border:2px solid var(--bdr);cursor:pointer;transition:all .2s;min-width:62px;flex-shrink:0}
    .dchip.dis{opacity:.3;cursor:not-allowed}
    .dchip:hover:not(.dis){border-color:var(--rose)}
    .dchip.on{background:var(--rose);border-color:var(--rose);color:#fff}
    .dchip .dy{font-size:11px;font-weight:700;text-transform:uppercase}
    .dchip .dn{font-size:20px;font-weight:700;margin:2px 0}
    .tgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
    .tslot{padding:10px 8px;text-align:center;border:2px solid var(--bdr);border-radius:var(--radx);font-size:13px;font-weight:500;cursor:pointer;transition:all .2s}
    .tslot:hover{border-color:var(--rose)}
    .tslot.on{background:var(--rose);border-color:var(--rose);color:#fff}
    .tslot.bk{background:var(--bdr);border-color:var(--bdr);color:var(--text3);cursor:not-allowed;text-decoration:line-through}
    .igrp{margin-bottom:16px}
    .ilbl{font-size:11px;font-weight:700;color:var(--text2);text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;display:block}
    .ifld{width:100%;padding:12px 14px;border:2px solid var(--bdr);border-radius:var(--radx);font-size:15px;color:var(--text);background:var(--bg);outline:none;transition:border-color .2s}
    .ifld:focus{border-color:var(--rose)}
    .ifld::placeholder{color:var(--text3)}
    .crow{display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--bdr);font-size:14px}
    .crow:last-child{border-bottom:none}
    .crow-l{color:var(--text2)}
    .crow-v{font-weight:600;text-align:right}
    .succ{display:flex;flex-direction:column;align-items:center;padding:40px 20px;text-align:center}
    .succ-c{width:80px;height:80px;border-radius:50%;background:var(--green-bg);display:flex;align-items:center;justify-content:center;font-size:36px;animation:pop .5s cubic-bezier(.34,1.56,.64,1)}
    @keyframes pop{from{transform:scale(0)}}
    .succ-t{font-family:var(--fd);font-size:26px;font-weight:600;margin-top:20px}
    .succ-m{font-size:14px;color:var(--text2);margin-top:8px;line-height:1.6}
    .empty{text-align:center;padding:48px 20px;color:var(--text3)}
    .empty-i{font-size:52px;margin-bottom:12px;opacity:.5}
    .empty-t{font-size:14px;line-height:1.6}
    .hrs{margin:0 20px}
    .hrs-row{display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--bdr);font-size:13px}
    .hrs-row:last-child{border-bottom:none}
    .hrs-day{font-weight:600}
    .hrs-time{color:var(--text2)}
    .hrs-closed{color:var(--text3);font-style:italic}
  `;
  document.head.appendChild(s);
};

export default function App() {
  injectCSS();

  const [splash, setSplash] = useState(true);
  const [loading, setLoading] = useState(true);
  const [parlourName, setParlourName] = useState('Crazy Beauty Parlour');
  const [parlourOpen, setParlourOpen] = useState(true);
  const [hours, setHours] = useState({});
  const [services, setServices] = useState([]);
  const [step, setStep] = useState(0);
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [availableSlots, setAvailableSlots] = useState([]);
  const [bookedSlots, setBookedSlots] = useState({});
  const [categoryFilter, setCategoryFilter] = useState('All');

  // Splash screen timeout
  useEffect(() => {
    const t = setTimeout(() => setSplash(false), 3000);
    return () => clearTimeout(t);
  }, []);

  // Fetch initial data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [settingsRes, servicesRes, hoursRes] = await Promise.all([
          fetch('/api/settings'),
          fetch('/api/services'),
          fetch('/api/hours'),
        ]);

        if (settingsRes.ok) {
          const data = await settingsRes.json();
          setParlourName(data.parlour_name || 'Crazy Beauty Parlour');
          setParlourOpen(data.parlour_open !== false);
        }

        if (servicesRes.ok) {
          const data = await servicesRes.json();
          setServices(Array.isArray(data) ? data : []);
        }

        if (hoursRes.ok) {
          const data = await hoursRes.json();
          setHours(data || {});
        }
      } catch (e) {
        console.error('Error fetching data:', e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Fetch bookings when date is selected
  useEffect(() => {
    if (selectedDate && step === 1) {
      const fetchBookings = async () => {
        try {
          const res = await fetch(`/api/bookings?date=${selectedDate}`);
          if (res.ok) {
            const data = await res.json();
            const slots = {};
            if (Array.isArray(data)) {
              data.forEach((booking) => {
                const start = booking.start_time;
                const duration = booking.total_duration || 30;
                for (let m = 0; m < duration; m += 15) {
                  const slotTime = addMinutes(start, m);
                  slots[slotTime] = true;
                }
              });
            }
            setBookedSlots(slots);
            computeAvailableSlots(selectedDate, slots);
          }
        } catch (e) {
          console.error('Error fetching bookings:', e);
        }
      };
      fetchBookings();
    }
  }, [selectedDate, step]);

  const addMinutes = (time, mins) => {
    const [h, m] = time.split(':').map(Number);
    const total = h * 60 + m + mins;
    const nh = Math.floor(total / 60);
    const nm = total % 60;
    return `${String(nh).padStart(2, '0')}:${String(nm).padStart(2, '0')}`;
  };

  const computeAvailableSlots = (date, booked) => {
    const dayName = new Date(date + 'T00:00:00').toLocaleDateString('en-US', {
      weekday: 'long',
    });
    const dayHours = hours[dayName] || {};

    if (!dayHours.open) {
      setAvailableSlots([]);
      return;
    }

    const start = dayHours.start || '09:00';
    const end = dayHours.end || '18:00';
    const totalDuration = selectedServices.reduce(
      (sum, sid) => sum + (services.find((s) => s.id === sid)?.duration || 30),
      0
    );

    const slots = [];
    let current = start;

    const isToday = date === new Date().toISOString().split('T')[0];
    const now = new Date();
    const nowTimeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    while (current < end) {
      const canFit = addMinutes(current, totalDuration) <= end;
      const isPast = isToday && current < nowTimeStr;
      const isBooked = Array.from({ length: totalDuration / 15 }, (_, i) =>
        addMinutes(current, i * 15)
      ).some((t) => booked[t]);

      if (!isPast && !isBooked && canFit) {
        slots.push(current);
      }

      current = addMinutes(current, 15);
    }

    setAvailableSlots(slots);
  };

  const getTotalDuration = () => {
    return selectedServices.reduce(
      (sum, sid) => sum + (services.find((s) => s.id === sid)?.duration || 30),
      0
    );
  };

  const getCategories = () => {
    const cats = new Set(['All']);
    services.forEach((s) => {
      if (s.category) cats.add(s.category);
    });
    return Array.from(cats);
  };

  const getFilteredServices = () => {
    if (categoryFilter === 'All') return services;
    return services.filter((s) => s.category === categoryFilter);
  };

  const handleSubmitBooking = async () => {
    if (!clientName || !clientPhone) return;

    const payload = {
      client_name: clientName,
      client_phone: clientPhone,
      services: selectedServices,
      date: selectedDate,
      start_time: selectedTime,
      total_duration: getTotalDuration(),
    };

    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStep(4);
      } else {
        alert('Booking failed. Please try again.');
      }
    } catch (e) {
      console.error('Error submitting booking:', e);
      alert('Error submitting booking.');
    }
  };

  const handleReset = () => {
    setStep(0);
    setSelectedServices([]);
    setSelectedDate(null);
    setSelectedTime(null);
    setClientName('');
    setClientPhone('');
  };

  if (splash) {
    return (
      <div className="sp">
        <div className="sp-i">✿</div>
        <div className="sp-n">Crazy Beauty</div>
        <div className="sp-t">Parlour</div>
        <div className="sp-b"></div>
      </div>
    );
  }

  if (loading) {
    return <div className="cla"></div>;
  }

  return (
    <div className="cla">
      <div className="hdr">
        <div className="hdr-n">
          Crazy <em>Beauty</em>
        </div>
        <div className="hdr-sub">Parlour</div>
      </div>

      <div
        className={`sts ${parlourOpen ? 'op' : 'cl'}`}
        style={{
          margin: '0 20px 16px',
          padding: '12px 16px',
          borderRadius: 'var(--rads)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          fontSize: '13px',
          fontWeight: '600',
        }}
      >
        <div className="sts-dot"></div>
        {parlourOpen ? 'We are Open' : 'We are Closed'}
      </div>

      {!parlourOpen ? (
        <div className="crd">
          <div className="crd-t">Hours</div>
          <div className="hrs">
            {Object.entries(hours).map(([day, info]) => (
              <div key={day} className="hrs-row">
                <div className="hrs-day">{day}</div>
                <div className="hrs-time">
                  {info.open ? (
                    `${info.start} - ${info.end}`
                  ) : (
                    <span className="hrs-closed">Closed</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          {step < 4 && (
            <div className="prg">
              {['Services', 'Date & Time', 'Your Details', 'Confirm'].map(
                (label, i) => (
                  <div key={i} className="prg-s">
                    <div
                      className="prg-bar"
                      style={{
                        background:
                          i < step
                            ? 'var(--rose)'
                            : i === step
                              ? 'var(--rose)'
                              : 'var(--bdr)',
                      }}
                    ></div>
                    <div
                      className="prg-l"
                      style={{
                        color: i <= step ? 'var(--text)' : 'var(--text3)',
                      }}
                    >
                      {i + 1}
                    </div>
                  </div>
                )
              )}
            </div>
          )}

          {step === 0 && (
            <>
              <div className="cats">
                {getCategories().map((cat) => (
                  <div
                    key={cat}
                    className={`cat ${categoryFilter === cat ? 'on' : ''}`}
                    onClick={() => setCategoryFilter(cat)}
                  >
                    {cat}
                  </div>
                ))}
              </div>

              {getFilteredServices().length > 0 ? (
                <div className="crd">
                  <div className="crd-t">Select Services</div>
                  {getFilteredServices().map((svc) => (
                    <div
                      key={svc.id}
                      className={`svc ${selectedServices.includes(svc.id) ? 'on' : ''}`}
                      onClick={() => {
                        if (selectedServices.includes(svc.id)) {
                          setSelectedServices(
                            selectedServices.filter((s) => s !== svc.id)
                          );
                        } else {
                          setSelectedServices([...selectedServices, svc.id]);
                        }
                      }}
                    >
                      <div className="svc-ic">{svc.icon || '✨'}</div>
                      <div className="svc-inf">
                        <div className="svc-nm">{svc.name}</div>
                        <div className="svc-dur">
                          <span>⏱</span> {svc.duration} min
                        </div>
                      </div>
                      <div className="svc-chk">✓</div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="empty">
                  <div className="empty-i">✨</div>
                  <div className="empty-t">No services available</div>
                </div>
              )}

              <div className="bbar">
                <button
                  className="btn btn-p"
                  disabled={selectedServices.length === 0}
                  onClick={() => setStep(1)}
                >
                  Continue
                </button>
              </div>
            </>
          )}

          {step === 1 && (
            <>
              {!selectedDate ? (
                <>
                  <div className="crd">
                    <div className="crd-t">Select Date</div>
                    <div className="dscr">
                      {Array.from({ length: 14 }, (_, i) => {
                        const d = new Date();
                        d.setDate(d.getDate() + i);
                        const dateStr = d.toISOString().split('T')[0];
                        const dayName = d.toLocaleDateString('en-US', {
                          weekday: 'short',
                        });
                        const dayNum = d.getDate();
                        const dayHours = hours[d.toLocaleDateString('en-US', { weekday: 'long' })] || {};
                        const isClosed = !dayHours.open;

                        return (
                          <div
                            key={dateStr}
                            className={`dchip ${isClosed ? 'dis' : ''}`}
                            onClick={() => {
                              if (!isClosed) setSelectedDate(dateStr);
                            }}
                          >
                            <div className="dy">{dayName}</div>
                            <div className="dn">{dayNum}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="bbar">
                    <button className="btn btn-o" onClick={() => setStep(0)}>
                      Back
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="crd">
                    <div className="crd-t">Select Time</div>
                    {availableSlots.length > 0 ? (
                      <div className="tgrid">
                        {availableSlots.map((slot) => (
                          <div
                            key={slot}
                            className={`tslot ${selectedTime === slot ? 'on' : ''}`}
                            onClick={() => setSelectedTime(slot)}
                          >
                            {slot}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="empty">
                        <div className="empty-i">📅</div>
                        <div className="empty-t">No available times</div>
                      </div>
                    )}
                  </div>

                  <div className="bbar">
                    <button
                      className="btn btn-o"
                      onClick={() => setSelectedDate(null)}
                    >
                      Change Date
                    </button>
                    <button
                      className="btn btn-p"
                      style={{ marginTop: '8px' }}
                      disabled={!selectedTime}
                      onClick={() => setStep(2)}
                    >
                      Continue
                    </button>
                  </div>
                </>
              )}
            </>
          )}

          {step === 2 && (
            <>
              <div className="crd">
                <div className="crd-t">Your Details</div>

                <div className="igrp">
                  <label className="ilbl">Full Name</label>
                  <input
                    type="text"
                    className="ifld"
                    placeholder="Enter your name"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                  />
                </div>

                <div className="igrp">
                  <label className="ilbl">Phone Number</label>
                  <input
                    type="tel"
                    className="ifld"
                    placeholder="Enter your phone"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                  />
                </div>
              </div>

              <div className="bbar">
                <button className="btn btn-o" onClick={() => setStep(1)}>
                  Back
                </button>
                <button
                  className="btn btn-p"
                  style={{ marginTop: '8px' }}
                  disabled={!clientName || !clientPhone}
                  onClick={() => setStep(3)}
                >
                  Continue
                </button>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <div className="crd">
                <div className="crd-t">Confirm Booking</div>

                <div className="crd-st">Services</div>
                {selectedServices.map((sid) => {
                  const svc = services.find((s) => s.id === sid);
                  return (
                    <div key={sid} className="crow">
                      <div className="crow-l">{svc?.name || 'Service'}</div>
                      <div className="crow-v">{svc?.duration || 30} min</div>
                    </div>
                  );
                })}

                <div className="crd-st" style={{ marginTop: '16px' }}>
                  Appointment
                </div>
                <div className="crow">
                  <div className="crow-l">Date</div>
                  <div className="crow-v">{selectedDate}</div>
                </div>
                <div className="crow">
                  <div className="crow-l">Time</div>
                  <div className="crow-v">{selectedTime}</div>
                </div>

                <div className="crd-st" style={{ marginTop: '16px' }}>
                  Client
                </div>
                <div className="crow">
                  <div className="crow-l">Name</div>
                  <div className="crow-v">{clientName}</div>
                </div>
                <div className="crow">
                  <div className="crow-l">Phone</div>
                  <div className="crow-v">{clientPhone}</div>
                </div>

                <div className="crow" style={{ marginTop: '16px' }}>
                  <div className="crow-l" style={{ fontWeight: '600' }}>
                    Total Duration
                  </div>
                  <div className="crow-v">{getTotalDuration()} min</div>
                </div>
              </div>

              <div className="bbar">
                <button className="btn btn-o" onClick={() => setStep(2)}>
                  Back
                </button>
                <button
                  className="btn btn-p"
                  style={{ marginTop: '8px' }}
                  onClick={handleSubmitBooking}
                >
                  Complete Booking
                </button>
              </div>
            </>
          )}
        </>
      )}

      {step === 4 && (
        <>
          <div className="succ">
            <div className="succ-c">✓</div>
            <div className="succ-t">Booking Confirmed!</div>
            <div className="succ-m">
              Your appointment has been successfully booked. We look forward to
              seeing you soon!
            </div>
          </div>

          <div className="bbar">
            <button className="btn btn-p" onClick={handleReset}>
              Book Another
            </button>
          </div>
        </>
      )}
    </div>
  );
}
