import React from 'react';
import { ChevronDown } from 'lucide-react';

const AssetListItem = ({ asset, isOpen, onToggle }) => {
  return (
    <div className="cursor-pointer hover:bg-slate-50/50 transition-colors" onClick={onToggle}>
      {/* 項目主列 */}
      <div className="p-5 pb-2 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className={`w-10 h-10 flex items-center justify-center ${asset.bg} rounded-full shadow-sm`}>
            {asset.icon}
          </div>
          <div>
            <h4 className="font-bold text-slate-700">{asset.title}</h4>
            <p className="text-xs text-slate-400">佔比 {asset.percent}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-lg font-semibold text-slate-900">$ {asset.amount}</span>
          <ChevronDown 
            className={`h-5 w-5 text-slate-300 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
          />
        </div>
      </div>

      {/* 展開的明細區塊 */}
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100 pb-5 px-5' : 'max-h-0 opacity-0 px-5'
        }`}
      >
        <div className="mt-2 p-4 bg-slate-50 rounded-xl border border-slate-100">
          <p className="text-sm text-slate-500 mb-3">{asset.description}</p>
          <table className="w-full text-xs">
            <thead>
              <tr className="text-slate-400 border-b border-slate-200">
                <th className="py-2 text-left font-medium">項目</th>
                <th className="py-2 text-right font-medium">數值</th>
              </tr>
            </thead>
            <tbody>
              {asset.details.map((detail, idx) => (
                <tr 
                  key={idx} 
                  className={`
                    ${detail.isNegative ? 'text-red-500' : 'text-slate-600'} 
                    ${detail.isBold ? 'text-slate-900 font-bold border-t border-slate-200' : ''}
                  `}
                >
                  <td className="py-2">{detail.label}</td>
                  <td className="py-2 text-right">{detail.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AssetListItem;