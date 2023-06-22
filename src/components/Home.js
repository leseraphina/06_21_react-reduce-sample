import productList from '../productList.json';

import './Home.css';
import { addToCart,removeFromCart } from '../redux/CartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProdcuts } from '../redux/ProductList';
import { useEffect } from 'react';
// 55
export default function Home(){
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const {cart,products} = state;
  
  useEffect( () => {
    dispatch(fetchAllProdcuts('./productList.json/products'))
  },[dispatch])
  return (
    <div className="boxHome">
      {products.data?.map((product) =>{
        return (
        <figure key={product.id}>
          <img src={product.imageUrl} alt={product.name} />
          <figcaption>
            <dl>
              <dt>{product.name}</dt>
              <dd>{product.price}</dd>
              <dd>
                {!cart.cartProductIds.includes(product.id) && (<button type="button" 
                  className="plus"
                  onClick={() =>{dispatch(addToCart(product.id))}}
                >추가</button>)}
                
                {cart.cartProductIds.includes(product.id) && (<button type="button" 
                  className="del"
                  onClick={() =>{dispatch(removeFromCart(product.id))}}
                >삭제</button>)}
              </dd>
            </dl>
          </figcaption>
        </figure>)
      })}
      
    </div>
  )
}