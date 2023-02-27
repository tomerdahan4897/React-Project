import { useState } from 'react';
import { countryText, chooseCountry } from '../../services/chooseCountry'
import css from './ChoosePlace.module.scss';
import { useAppDispatch } from '../../app/hooks';
import { fetchVideo } from '../../features/videos/videosSlice';

const ChoosePlace = () => {
  const [country, setCountry] = useState('IL');
  const [views, setViews] = useState('');
  const disaptch = useAppDispatch();

  const chooseCountryHandler = (e:any)=> {
    setCountry(e.target.value)
  }
  const chooseViewsHandler = (e:any)=> {
    setViews(e.target.value)
  }

  const sendInfoToStore = () => {
    if(views !==''){
        disaptch(fetchVideo({country, views}));
    }
    else {
        disaptch(fetchVideo({country}));
    }
    
  }

  return (
    <div className='d-flex flex-column align-items-center justify-content-center'>
        <p className={`mt-3 ${css.countryText}`}>{countryText}</p>
        <p className={css.chooseCountry}>{chooseCountry}</p>

        <select value={country} onChange={chooseCountryHandler} className={css.selects}>
            <option value="IL">Israel</option>
            <option value="US">USA</option>
            <option value="BR">Brazil</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="TH">Thailand</option>
        </select>

        <p className={css.filterViews}>Filter By Views:</p>
        <select value={views} onChange={chooseViewsHandler} className={css.selects}>
            <option value=''>Unlimited</option>
            <option value="500000">Until 500K views</option>
            <option value="1000000">Until 1M Views</option>
            <option value="1500000">Until 1.5M Views</option>
            <option value="2000000">Until 2M Views</option>
            <option value="5000000">Until 5M Views</option>
        </select>

        <button className='btn btn-danger mt-4' onClick={sendInfoToStore}>CHOOSE</button>
    </div>
  )
}

export default ChoosePlace