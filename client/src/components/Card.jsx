import { Link } from 'react-router-dom';
import {TiTimes} from "react-icons/ti";
import { removeFromFavorites } from '../redux/productSlice';
import { useDispatch} from 'react-redux';

const Card = ({id, title, price, image}) => {
  const dispatch = useDispatch();


  return (
    <div className='flex flex-col gap-4 relative'>
        <Link to={`/products/${id}`}>
        <img src={image} alt={title} className="object-cover w-[200px] h-[200px] float-left md:w-[400px] md:h-[400px] rounded-md" />
        </Link>
        <div className='flex flex-col px-1'>
            <h4 className='text-sm sm:text-base md:text-lg'>{title}</h4>
            <p className='font-bold text-sm sm:text-base md:text-lg'>£ {price}</p>
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