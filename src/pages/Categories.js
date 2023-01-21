import { useContext } from "react";
import { Context } from "../context/Context";
import CartegoryItem from "../components/CategoryItem";

export default function Categories() {
  const { categories } = useContext(Context);
  console.log(categories);

  const categoryList = categories.map((category) => {
    return <CartegoryItem category={category} />;
  });

  return (
    <div className="current-tab center">
      <h1 className="accent title-1">Shop Categories</h1>
      <div className="category-list">{categoryList}</div>
    </div>
  );
}
