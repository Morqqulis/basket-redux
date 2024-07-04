import { Link } from "react-router-dom"
import Basket from "../ui/Basket"
import LikedItems from "../ui/LikedItems"

const Header = () => {


  return (
    <header className={`py-5`}>
      <div className="container">
        <nav className={`flex items-center justify-between`}>
          <Link className={`text-2xl font-semibold`} to={"/"}>
            Logo
          </Link>
          <span className={`text-3xl font-bold`}>Redux Store</span>
          <ul className={`flex items-center gap-5`}>
            <li>
              <LikedItems />
            </li>
            <li>
              <Basket />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
