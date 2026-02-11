import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Fund from './pages/Fund';
import MyFund from './pages/MyFund';
// import
// 準備幾個簡單的組件
const Home = () => <h2>這是首頁</h2>;
const About = () => <h2>關於我們</h2>;
const NotFound = () => <h2>404 - 找不到頁面</h2>;

function App() {
  return (
    <BrowserRouter>
      {/* 導覽列：使用 Link 而非 <a> 以避免頁面重新整理 */}
      {/* <nav>
        <Link to="/">首頁</Link> | 
        <Link to="/about">關於</Link>
        <Link to="/fund">Fund</Link>
        <Link to="/my-fund">MyFund</Link>
      </nav> */}

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
  );
}

export default App;
