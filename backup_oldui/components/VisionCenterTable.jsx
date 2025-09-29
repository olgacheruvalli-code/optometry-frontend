import React from "react";

export default function VisionCenterTable({ data = [], onChange, disabled, cumulative }) {
  const rows = Array.isArray(data) ? data : [];
  const cols = ["Center","Screened","Referred"];
  return (
    <table className="w-full border text-sm">
      <thead>
        <tr>{cols.map(c=><th key={c} className="border p-1 text-left">{c}</th>)}</tr>
      </thead>
      <tbody>
        {rows.length ? rows.map((r, i)=>(
          <tr key={i}>
            {cols.map((k)=>(
              <td key={k} className="border p-1">
                {k === "Center" ? (
                  <input
                    className="w-full border p-1"
                    value={r[k] ?? ""}
                    onChange={(e)=>onChange && onChange(i, k, e.target.value)}
                    disabled={disabled}
                  />
                ) : (
                  <input
                    type="number"
                    className="w-full border p-1 text-right"
                    value={r[k] ?? ""}
                    min="0"
                    onChange={(e)=>onChange && onChange(i, k, e.target.value)}
                    disabled={disabled}
                  />
                )}
              </td>
            ))}
          </tr>
        )) : (
          <tr><td className="border p-2 text-center text-gray-500" colSpan={cols.length}>No rows</td></tr>
        )}
      </tbody>
    </table>
  );
}
