import { useState } from "react";
import "../../src/styles/theme.css";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export default function Calendar() {
  const today = new Date();
  const [current, setCurrent] = useState({ month: today.getMonth(), year: today.getFullYear() });

  function prevMonth() {
    setCurrent(({ month, year }) =>
      month === 0 ? { month: 11, year: year - 1 } : { month: month - 1, year }
    );
  }

  function nextMonth() {
    setCurrent(({ month, year }) =>
      month === 11 ? { month: 0, year: year + 1 } : { month: month + 1, year }
    );
  }

  const firstDay = new Date(current.year, current.month, 1).getDay();
  const daysInMonth = new Date(current.year, current.month + 1, 0).getDate();

  const cells = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  const isToday = (d) =>
    d === today.getDate() &&
    current.month === today.getMonth() &&
    current.year === today.getFullYear();

  return (
    <div style={{ padding: "32px", maxWidth: "480px", margin: "0 auto", fontFamily: "var(--font)" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px" }}>
        <button onClick={prevMonth} style={btnStyle}>&#8592;</button>
        <h2 style={{ margin: 0, color: "var(--ink)", fontSize: "18px" }}>
          {MONTHS[current.month]} {current.year}
        </h2>
        <button onClick={nextMonth} style={btnStyle}>&#8594;</button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "4px", marginBottom: "8px" }}>
        {DAYS.map((d) => (
          <div key={d} style={{ textAlign: "center", fontSize: "12px", color: "var(--sage)", fontWeight: 600, padding: "4px 0" }}>
            {d}
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "4px" }}>
        {cells.map((d, i) => (
          <div
            key={i}
            style={{
              height: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "var(--radius)",
              fontSize: "14px",
              background: d && isToday(d) ? "var(--moss)" : "transparent",
              color: d && isToday(d) ? "var(--on-accent)" : d ? "var(--ink)" : "transparent",
              fontWeight: d && isToday(d) ? 700 : 400,
              cursor: d ? "pointer" : "default",
            }}
          >
            {d}
          </div>
        ))}
      </div>
    </div>
  );
}

const btnStyle = {
  background: "none",
  border: "1px solid var(--line)",
  borderRadius: "var(--radius)",
  padding: "6px 14px",
  cursor: "pointer",
  color: "var(--ink)",
  fontSize: "16px",
};