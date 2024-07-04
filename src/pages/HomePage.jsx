import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Products from "../components/sections/Products";

const HomePage = () => {
  return (
    <div className={"wrapper"}>
      <Header />
      <main>
        <Products />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
