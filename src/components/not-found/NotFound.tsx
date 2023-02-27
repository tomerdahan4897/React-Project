import css from './NotFound.module.scss';
import {HiOutlineEmojiSad} from 'react-icons/hi';

import { useNavigate } from 'react-router-dom';
const NotFound = () => {
    const nav = useNavigate();
  return (
        <div className='d-flex flex-column justify-content-center align-items-center mt-3'>
      <span className={css.errorNumber}>404</span>
        <HiOutlineEmojiSad size={150}/>
      <p className={`mt-3 ${css.message}`}>Page Not Found</p>
      <button className={`btn btn-primary mt-2 ${css.tryLater}`} onClick={()=> {
        nav(`/`);
      }}>Back To Home Page</button>
    </div>
  )
}

export default NotFound;