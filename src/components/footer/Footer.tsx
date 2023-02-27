import css from './Footer.module.scss';
import {FiMail, FiPhone} from 'react-icons/fi'
import {AiOutlineLinkedin} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className={`d-flex flex-column align-items-center justify-content-center mt-5 ${css.mainFooter}`}>


        <div className={css.infoDiv}>
            
            <div className={`d-flex flex-column align-items-center justify-content-center${css.phoneDiv}`}>
                <span><FiPhone size={80}/></span>
                <p className={css.phoneP}>054-7002548</p>
            </div>

            <div className={`d-flex flex-column align-items-center justify-content-center${css.mailDiv}`}>
                <span><FiMail size={80}/></span>
                <p className={css.emailP}>tomer.dahan10@gmail.com</p>
            </div>

            <div className={`d-flex flex-column align-items-center justify-content-center${css.phoneDiv}`}>
                <span >
                    <a className={css.linkedInSymbol} href="https://www.linkedin.com/in/tomer-dahan-fullstack-developer/" target="_blank" rel="noreferrer"><AiOutlineLinkedin size={80}/></a></span>
                <p className={css.linedIn}>Tomer Dahan</p>
            </div>

        </div>
        <span className={css.rights}> &copy; All rights reserved to Tomer Dahan</span>
    </div>
  )
}

export default Footer;