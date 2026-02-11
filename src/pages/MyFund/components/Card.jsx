import React from 'react';

function Card() {
  return (
    <div className="mx-auto mt-5 flex max-w-md flex-col rounded-xl border border-gray-100 bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">
      {/* 左側/上方：金額區塊 */}
      <div className="text-center md:text-left">
        <span className="mb-1 block text-sm text-gray-500">資產淨額</span>
        <div className="text-2xl font-bold text-gray-900">$1,280,450</div>
      </div>

      {/* 右側/下方：漲跌幅區塊 */}
      <div className="mt-3 text-center md:mt-0 md:text-right">
        <span className="mb-1 block text-sm text-gray-500 md:hidden">
          今日損益
        </span>
        <div className="inline-flex items-center rounded-full bg-red-50 px-3 py-1 text-sm font-semibold text-red-600">
          <span className="mr-1">▲</span> 5.24%
        </div>
      </div>
    </div>
  );
}

export default Card;
