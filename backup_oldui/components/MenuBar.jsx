import React from "react";

const buttons = [
  ["entry","Report Entry"],
  ["view","View"],
  ["district-institutions","District → Institutions"],
  ["district-dl-inst","Download (Institutions)"],
  ["district-dl-ebvc","Download (EyeBank & VC)"],
  ["district-tables","District Tables"],
  ["print","Print"],
  ["edit","Edit"],
  ["test-vc","Test VC"],
];

export default function MenuBar({ user, userRole, active, onMenu, onLogout }) {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white border-b shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center gap-2 p-2">
        <div className="font-bold text-[#134074] flex-1">NPCB Reporting</div>
        {buttons.map(([key,label])=>(
          <button
            key={key}
            onClick={()=>onMenu && onMenu(key)}
            className={`px-3 py-1 rounded ${active===key ? "bg-[#134074] text-white" : "bg-gray-100"}`}
          >
            {label}
          </button>
        ))}
        <div className="ml-2 text-sm text-gray-700">{user?.institution}</div>
        <button className="ml-2 px-3 py-1 rounded bg-red-600 text-white" onClick={()=>onLogout && onLogout()}>Logout</button>
      </div>
    </div>
  );
}
