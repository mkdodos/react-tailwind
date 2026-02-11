import React from "react";

function TabSwitcher({activeTab,setActiveTab}) {
  return (
    //   {/* 分頁導覽 */}
    <div className="flex border-b border-slate-200 mb-6">
      <button
        onClick={() => setActiveTab("overview")}
        className={`px-6 py-2 transition-all ${activeTab === "overview" ? "font-bold text-indigo-600 border-b-2 border-indigo-600" : "font-medium text-slate-500 hover:text-indigo-600"}`}
      >
        資產總覽
      </button>
      <button
        onClick={() => setActiveTab("monthly")}
        className={`px-6 py-2 transition-all ${activeTab === "monthly" ? "font-bold text-indigo-600 border-b-2 border-indigo-600" : "font-medium text-slate-500 hover:text-indigo-600"}`}
      >
        每月明細
      </button>
    </div>
  );
}

export default TabSwitcher;
