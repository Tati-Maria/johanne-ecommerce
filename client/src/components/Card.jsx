import { Link } from 'react-router-dom';
import {TiTimes} from "react-icons/ti";
import { removeFromFavorites } from '../redux/productSlice';
import { useDispatch} from 'react-redux';

const Card = ({id, title, price, image, newPrice}) => {
  const dispatch = useDispatch();


  return (
    <div className='flex flex-col gap-4 relative'>
        <Link to={`/products/${id}`}>
        <img src={image} alt={title} className="object-cover w-[200px] h-[200px] float-left md:w-[400px] md:h-[400px] rounded-md" />
        </Link>
        <div className='flex flex-col px-1'>
            <h4 className='text-sm sm:text-base md:text-lg'>{title}</h4>
            <p className='font-bold text-sm sm:text-base md:text-lg'>
            {newPrice ? (<span className='font-normal line-through text-gray-400 text-sm'>£ {price}</span>) : <span>£ {price}</span>}
            {newPrice && <span className='text-red-500'> £ {newPrice}</span>}
            </p>
        </div>
        
        <TiTimes
        className='absolute right-0 cursor-pointer hover:scale-125 duration-200'
        color='red'
        size={30} 
        onClick={() => {
          dispatch(removeFromFavorites(id))
        }}
        />
   
    </div>
  )
}

export default Card