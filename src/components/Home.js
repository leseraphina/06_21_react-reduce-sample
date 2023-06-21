import productList from '../productList.json';
import './Home.css';
import { addToCart,removeFromCart } from '../redux/CartSlice';
import { useDispatch, useSelector } from 'react-redux';
// 55
export default function Home(){
  const dispatch = useDispatch();
  const state = useSelector(state => state)
  return (
    <div className="boxHome">
      {productList.products.map((product) =>{
        return (
        <figure key={product.id}>
          <img src={product.imageUrl} alt={product.name} />
          <figcaption>
            <dl>
              <dt>{product.name}</dt>
              <dd>{product.price}</dd>
              <dd>
                <button type="button" className="plus">추가</button>
                <button type="button" className="del">삭제</button>
              </dd>
            </dl>
          </figcaption>
        </figure>)
      })}
      
    </div>
  )
}