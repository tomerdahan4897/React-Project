import {HiOutlineEmojiSad} from 'react-icons/hi';
import css from './ServerErrorPage.module.scss';
const ServerErrorPage = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center mt-3'>
      <span className={css.errorNumber}>500</span>
      <p className={css.message}>SERVER ERROR!</p>
      <HiOutlineEmojiSad size={150}/>
      <p className={`mt-2 ${css.tryLater}`}>Please Try Later</p>
    </div>
  )
}

export default ServerErrorPage