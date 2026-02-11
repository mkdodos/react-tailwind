import React from 'react';

function MyCard() {
  return (
    // <div className="mt-4 flex flex-col items-center">
    //   <div className="w-fit rounded-t-md border border-gray-300 bg-gray-100 p-2 text-center text-gray-600">
    //     標題
    //   </div>
    //   {/* -mt-px (margin-top: -1px)，會向上位移 1 像素 */}
    //   <div className="-mt-px w-1/2 rounded-b-md border border-gray-300 bg-white py-8 text-center text-gray-900">
    //     內容
    //   </div>
    // </div>

    /* 增加這一層 flex 容器來確保子元素置中 */
    <div className="flex w-full flex-col">
      {/* 標題 */}
      <div className="rounded-t-md border border-gray-300 bg-gray-100 p-2 text-center text-gray-600">
        標題
      </div>
      {/* 內容 */}
      <div className="-mt-px rounded-b-md border border-gray-300 bg-white py-8 text-center text-gray-900 shadow-sm">
        內容
      </div>
    </div>
  );
}

export default MyCard;
