import { Button, Menu, MenuButton, MenuList } from "@chakra-ui/react";
import { ShoppingCart, Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromBasket } from "../../stores/slices/basketSlice";
import { toast } from "react-toastify";
const Basket = () => {
  const basketItems = useSelector((state) => state.basket.items);
  const dispatch = useDispatch();

  return (
    <Menu>
      <MenuButton
        className={`relative ${basketItems.length > 0 ? "!bg-green-300" : ""}`}
        as={Button}
      >
        <ShoppingCart />
        <span className="absolute left-1/2 top-0 -translate-x-1/2 text-xs font-bold text-red-500">
          {basketItems.length}
        </span>
      </MenuButton>
      <MenuList>
        {basketItems.length === 0 && (
          <p className={`text-center`}>Basket is empty</p>
        )}
        {basketItems.length > 0 &&
          basketItems.map((item, i) => (
            <div
              className={`flex flex-row-reverse items-center justify-between gap-2.5 rounded-md border-b p-1`}
              key={i}
            >
              {item.title.length > 20 ? item.title.slice(0, 20) : item.title}
              <div>
                Count: <span className={`font-bold`}>{item.count}</span>
              </div>
              <img
                className={`max-w-[20px]`}
                src={item.image}
                alt={item.title + " image"}
              />

              <Trash2
                onClick={() => {
                  dispatch(removeFromBasket(item.id));
                  toast("Item removed from basket");
                }}
                className={`-order-2 duration-300 hover:cursor-pointer hover:text-red-500`}
              />
            </div>
          ))}

        <span
          className={`text- mt-2.5 flex items-end justify-end p-2 text-right font-bold`}
        >
          Total price:{' '}
          {basketItems.reduce(
            (acc, item) => acc + Math.round(item.price * item.count),
            0,
          )}$
        </span>
      </MenuList>
    </Menu>
  );
};

export default Basket;
