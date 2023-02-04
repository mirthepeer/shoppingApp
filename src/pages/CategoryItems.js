import { Context } from '../context/Context';
import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../components/Product';
import CartegoryItem from '../components/CategoryItem';
import BarLoader from "react-spinners/BarLoader";


export default function CategoryItems() {
  const { category } = useParams();
  const { 
    handleAdd,
    cart,
    removeItem,
    getCategoryProducts,
    categoryProducts,
    categories } = useContext(Context);
  
  useEffect(() => {
    getCategoryProducts(category);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

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
    
    const loadingMessage = catagoryItemsList? <BarLoader
   loading={false}
   
  /> :  
  <BarLoader
    color={	`#422a22`}
    loading={true}
    size={65}
    aria-label="Loading Spinner"
    data-testid="loader"
  />
    
    const otherCategories = categories.filter(item=>item!==category)
    console.log(otherCategories);
    
    const categorySuggestions = otherCategories.map(category=>{
        return (
            <CartegoryItem
            category={category}
            />
        )
    })


  return (
    <>
      <div className="current-tab">
        <h1 className='accent center title-1'>
          Shop <span className="title-1">{category}</span>
        </h1>
      </div>
      <div className='centered-div'>
      {loadingMessage}
      </div>
      <div className="container border">
        {catagoryItemsList}
      </div>
      <h1 className='center accent margin-top'>Shop Other Categories</h1>
      <div className='container margin-top border'>
       
        {categorySuggestions}
      </div>
    </>
  );
}