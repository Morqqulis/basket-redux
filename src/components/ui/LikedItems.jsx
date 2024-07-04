import { Button, Menu, MenuButton, MenuList } from "@chakra-ui/react"
import { Heart, Trash2 } from "lucide-react"
import { useDispatch, useSelector } from "react-redux"
import { removeFromLikedItems } from "../../stores/slices/likedItemsSlice"
const LikedItems = () => {
  const likedItems = useSelector((state) => state.likedItems.items);
  const dispatch = useDispatch();

  return (
    <Menu>
      <MenuButton className={`relative`} as={Button}>
        <Heart />
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-bold text-red-500">
          {likedItems.length}
        </span>
      </MenuButton>
      <MenuList>
        {likedItems.length === 0 && (
          <p className="p-1 text-center">You did not like any items</p>
        )}
        {likedItems.length > 0 &&
          likedItems.map((item, i) => (
            <div
              className={`flex flex-row-reverse items-center justify-between gap-2.5 rounded-md border-b p-1`}
              key={i}
            >
              {item.title.length > 20 ? item.title.slice(0, 20) : item.title}

              <img
                className={`max-w-[20px]`}
                src={item.image}
                alt={item.title + " image"}
              />
              <Trash2
                onClick={() => dispatch(removeFromLikedItems(item))}
                className={`-order-2 duration-300 hover:cursor-pointer hover:text-red-500`}
              />
            </div>
          ))}
        <span className={`mt-5 flex justify-end p-2 text-lg font-bold`}>
          Total liked items: {likedItems.length}
        </span>
      </MenuList>
    </Menu>
  );
};

export default LikedItems;
