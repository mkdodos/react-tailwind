import React from 'react';
import AssetList from './components/AssetList';
import Card from './components/Card';
import MyCard from './components/MyCard';

function index() {
  return (
    <>
      {/* <Card /> */}
      <MyCard />
    </>

    // <div className="mx-auto flex max-w-md flex-col justify-between gap-2 p-4 md:flex-row">
    //   <div>金額</div>
    //   <div>漲跌幅</div>
    // </div>
  );
}

export default index;
