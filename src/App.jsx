import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Fund from './pages/Fund';
import MyFund from './pages/MyFund';
import Navbar from './components/Navbar';
// import
// 準備幾個簡單的組件
const Home = () => <h2 className="ml-5">這是首頁</h2>;
const About = () => <h2>關於我們</h2>;
const NotFound = () => <h2>404 - 找不到頁面</h2>;

function App() {
  return (
    /* 第二層：這層是關鍵！它會被導覽列的寬度撐開 */
    <div className="flex w-full justify-center px-4">
      <div className="flex w-fit flex-col">
        <BrowserRouter>
          <Navbar />

          {/* <hr /> */}

          {/* 路由切換區域 */}
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/about"
              element={<About />}
            />
            <Route
              path="/fund"
              element={<Fund />}
            />
            <Route
              path="/my-fund"
              element={<MyFund />}
            />

            {/* 全配配對，用於 404 頁面 */}
            <Route
              path="*"
              element={<NotFound />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
