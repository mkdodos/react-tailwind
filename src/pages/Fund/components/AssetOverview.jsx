import React from 'react';
import AssetListItem from './AssetListItem';

const AssetOverview = ({ data, openId, onToggle }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      {/* 標題區域 */}
      <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
        <h3 className="font-bold text-slate-800">資產項目紀錄</h3>
        <span className="text-xs text-slate-400">點擊項目查看組成明細</span>
      </div>

      {/* 資產列表 */}
      <div className="divide-y divide-slate-100">
        {data.map((asset) => (
          <AssetListItem
            key={asset.id}
            asset={asset}
            isOpen={openId === asset.id}
            onToggle={() => onToggle(asset.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default AssetOverview;