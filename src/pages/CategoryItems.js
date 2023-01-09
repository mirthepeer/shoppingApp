import { Context } from '../context/Context';
import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../components/Product';

export default function CategoryItems() {
  const { category } = useParams();
  const { handleAdd, cart, removeItem, getCategoryProducts, categoryProducts } = useContext(Context);

  useEffect(() => {
    getCategoryProducts(category);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const catagoryItemsList =
    categoryProducts[category] &&
    categoryProducts[category].map(item => {
      return (
        <Product
          key={item.id}
          item={item}
          handleAdd={handleAdd}
          cart={cart}
          removeItem={removeItem}
        />
      );
    });

  return (
    <>
      <div className="current-tab">
        <h1 className='center'>
          Shop <span className="category-item">{category}</span>
        </h1>
      </div>
      <div className="container">{catagoryItemsList}</div>
    </>
  );
}