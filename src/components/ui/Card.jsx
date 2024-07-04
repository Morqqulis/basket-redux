import { Heart } from "lucide-react"
import { useDispatch, useSelector } from "react-redux"
import { addToBasket } from "../../stores/slices/basketSlice"
import { addToLikedItems } from "../../stores/slices/likedItemsSlice"
import { decreaseCount, increaseCount } from "../../stores/slices/productSlice"

const Card = ({ id, title, price, count, image }) => {
  const dispatch = useDispatch();

  const likedItems = useSelector((state) => state.likedItems.items);

  const isLiked = likedItems.some((item) => item.id === id);

  return (
    <div
      className={`group/product relative flex h-full flex-col rounded-md border border-black bg-white p-5 shadow-2xl sm:w-full`}
      key={id}
    >
      <h3 className={`mb-5 text-center text-xl font-bold`}>
        {title.length > 20 ? title.slice(0, 20) : title}
      </h3>

      <img
        className={`mx-auto block w-full max-w-[150px] grow`}
        src={image}
        alt="product image"
      />
      <p className={`my-2.5 text-center text-2xl font-bold`}>
        {Math.round(price * count)}$
      </p>
      <button
        className={`absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 scale-0 items-center justify-center rounded-full bg-gray-400 duration-300 group-hover/product:scale-100`}
        onClick={() =>
          dispatch(addToLikedItems({ id, title, price, count, image }))
        }
      >
        <Heart className={`${isLiked ? "fill-red-500" : ""} `} size={50} />
      </button>

      <div className={`mt-auto flex items-center justify-around gap-2.5`}>
        <button
          className={`h-10 w-10 rounded-md bg-green-700 text-lg leading-10 text-white duration-300 hover:scale-110`}
          type={"button"}
          onClick={() => dispatch(decreaseCount({ id }))}
        >
          -
        </button>

        <span>{count}</span>

        <button
          className={`h-10 w-10 rounded-md bg-green-700 text-lg leading-10 text-white duration-300 hover:scale-105`}
          type={"button"}
          onClick={() => dispatch(increaseCount({ id }))}
        >
          +
        </button>
      </div>
      <button
        className={`mx-auto mt-5 block w-full rounded-md bg-red-400 py-2.5 duration-300 hover:scale-105`}
        type={"button"}
        onClick={() =>
          dispatch(addToBasket({ id, title, price, count, image }))
        }
      >
        Add to cart
      </button>
    </div>
  );
};

export default Card;
