import { useSelector } from "react-redux"

import Card from "../ui/Card"
const Products = () => {
  const products = useSelector((state) => state.product.items); // Измените productsData на products

  return (
    <section>
      <div className={`container`}>
        <h1
          className={`mb-10 text-center text-3xl font-bold sm:text-lg md:text-2xl`}
        >
          Products
        </h1>
        <div
          className={`grid grid-cols-3 items-start gap-5 sm:flex sm:flex-wrap sm:justify-center md:grid-cols-2`}
        >
          {products.map((product) => (
            <Card key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
