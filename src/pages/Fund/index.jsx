import React, { useState } from 'react';
import { BarChart3, Wallet, TrendingUp, Landmark, CreditCard } from 'lucide-react';
import AssetOverview from './components/AssetOverview';
import MonthlyHistory from './components/MonthlyHistory';

const Fund = () => {
  // 1. 狀態管理
  const [activeTab, setActiveTab] = useState('overview');
  const [openDetail, setOpenDetail] = useState(null);

  // 2. 模擬資料 (實務上通常從 API 獲取)
  const assetData = [
    {
      id: 'cash',
      title: '現金與存款',
      amount: '2,450,000',
      percent: '26.5%',
      icon: <Wallet className="text-emerald-600" size={20} />,
      bg: 'bg-emerald-50',
      description: '包含台幣活存、定存與外幣帳戶',
      details: [
        { label: '台幣儲蓄', value: '$ 1,200,000' },
        { label: '美金定存 (USD 40k)', value: '$ 1,250,000' }
      ]
    },
    {
      id: 'stock',
      title: '股票投資',
      amount: '5,800,000',
      percent: '62.7%',
      icon: <TrendingUp className="text-indigo-600" size={20} />,
      bg: 'bg-indigo-50',
      description: '美股與台股長期持有部位',
      details: [
        { label: '台股指數型 ETF', value: '$ 3,200,000' },
        { label: '美股科技股', value: '$ 2,600,000' }
      ]
    }
  ];

  const monthlyHistory = [
    { year: '2024' },
    { month: '2024 / 01', total: '$ 9,250,000', change: '+ 450,000', positive: true },
    { month: '2023 / 12', total: '$ 8,800,000', change: '- 120,000', positive: false },
  ];

  // 3. 事件處理
  const toggleDetails = (id) => {
    setOpenDetail(openDetail === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans text-slate-900">
      <div className="max-w-4xl mx-auto">
        
        {/* 頂部概覽卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <p className="text-sm font-medium text-slate-500">總資產淨值</p>
            <h2 className="text-3xl font-bold mt-1 flex items-center gap-1">
              <span className="text-slate-400 text-2xl font-normal">$</span> 19,250,000
            </h2>
          </div>
          <div className="bg-indigo-600 p-6 rounded-2xl shadow-lg text-white">
            <p className="text-sm text-indigo-100">本月成長率</p>
            <h2 className="text-3xl font-bold mt-1">+ 5.2%</h2>
          </div>
        </div>

        {/* 分頁導覽切換 */}
        <div className="flex border-b border-slate-200 mb-6">
          {['overview', 'monthly'].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 transition-all capitalize ${
                activeTab === tab 
                ? 'font-bold text-indigo-600 border-b-2 border-indigo-600' 
                : 'font-medium text-slate-500 hover:text-indigo-600'
              }`}
            >
              {tab === 'overview' ? '資產總覽' : '每月明細'}
            </button>
          ))}
        </div>

        {/* 主要內容區塊 */}
        <main>
          {activeTab === 'overview' ? (
            <AssetOverview 
              data={assetData} 
              openId={openDetail} 
              onToggle={toggleDetails} 
            />
          ) : (
            <>
              <MonthlyHistory data={monthlyHistory} />
              {/* 年度分析提示 (僅在每月明細顯示) */}
              <div className="mt-4 p-4 bg-indigo-50 rounded-xl border border-indigo-100 flex items-center gap-3">
                <div className="p-2 bg-indigo-600 text-white rounded-lg">
                  <BarChart3 size={20} />
                </div>
                <p className="text-sm text-indigo-800">
                  <strong>年度分析：</strong> 2024 年度至今總資產淨成長約 6.5%，趨勢平穩向上。
                </p>
              </div>
            </>
          )}
        </main>

        <footer className="mt-6 text-center text-slate-400 text-sm italic">
          提示：點擊上方標籤可切換檢視模式。
        </footer>
      </div>
    </div>
  );
};

export default Fund;