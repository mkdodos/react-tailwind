import { Link } from 'react-router-dom';

const navItems = [
  { name: '首頁', path: '/' },
  { name: '關於', path: '/about' },
  { name: 'Fund', path: '/fund' },
  { name: 'MyFund', path: '/my-fund' },
];

function Navbar() {
  return (
    /* 導覽列：使用 Link 而非 <a> 以避免頁面重新整理 */
    // -space-x-px 負邊距，後一個邊框會壓在前一個邊框上，讓整排線條看起來都是精準的 1px
    /* px 是 Padding Horizontal（水平內邊距）。 */
    /* 它是 padding-left 和 padding-right */
    <div className="flex justify-center">
      <nav className="mt-5 mb-5 flex w-fit -space-x-px rounded-lg shadow-md">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="border border-gray-300 px-6 py-2 transition-colors first:rounded-l-md last:rounded-r-md hover:bg-amber-50"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default Navbar;
