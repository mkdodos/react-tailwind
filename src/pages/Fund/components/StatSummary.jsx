import React from "react";

function StatSummary() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <p className="text-sm font-medium text-slate-500">總資產淨值</p>
        <h2 className="text-3xl font-bold text-slate-900 mt-1 flex items-center gap-1">
          <span className="text-slate-400 text-2xl font-normal">$</span>{" "}
          2,500,000
        </h2>
      </div>
      <div className="bg-indigo-600 p-6 rounded-2xl shadow-lg text-white">
        <p className="text-sm text-indigo-100">本月成長率</p>
        <h2 className="text-3xl font-bold mt-1">+ 95.2%</h2>
      </div>
    </div>
  );
}

export default StatSummary;
