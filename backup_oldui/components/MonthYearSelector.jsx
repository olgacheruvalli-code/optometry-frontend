import React from "react";

const MONTHS = ["April","May","June","July","August","September","October","November","December","January","February","March"];
export default function MonthYearSelector({ month, year, setMonth, setYear, disabled }) {
  return (
    <div className="flex gap-3">
      <select className="border p-2 rounded" value={month} onChange={(e)=>setMonth(e.target.value)} disabled={disabled}>
        <option value="">Month</option>
        {MONTHS.map((m)=> <option key={m} value={m}>{m}</option>)}
      </select>
      <select className="border p-2 rounded" value={year} onChange={(e)=>setYear(e.target.value)} disabled={disabled}>
        <option value="">Year</option>
        {Array.from({length:6},(_,i)=>2024+i).map((y)=><option key={y} value={y}>{y}</option>)}
      </select>
    </div>
  );
}
