import React from 'react';

const MonthlyHistory = ({ data }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      {/* 區塊標題 */}
      <div className="p-5 border-b border-slate-100 bg-slate-50/50">
        <h3 className="font-bold text-slate-800">歷史資產變動明細</h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-50 text-slate-500 text-xs uppercase font-bold tracking-wider">
            <tr>
              <th className="px-6 py-4">年月</th>
              <th className="px-6 py-4">淨資產總額</th>
              <th className="px-6 py-4 text-right">變動金額</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {data.map((item, idx) => (
              <React.Fragment key={idx}>
                {/* 如果有年度資訊，渲染年度分隔列 */}
                {item.year && (
                  <tr className="bg-slate-50/80 border-t border-slate-200">
                    <td colSpan="3" className="px-6 py-2 text-xl font-bold text-slate-600">
                      {item.year}
                    </td>
                  </tr>
                )}
                
                {/* 資料列 */}
                <tr className="hover:bg-slate-50/30 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-700">
                    {item.month}
                  </td>
                  <td className="px-6 py-4 font-semibold text-slate-900">
                    {item.total}
                  </td>
                  <td className={`px-6 py-4 text-right font-medium ${item.positive ? 'text-green-600' : 'text-red-500'}`}>
                    {item.change}
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MonthlyHistory;