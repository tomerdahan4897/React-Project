import { useAppSelector } from "../../app/hooks";
import AddSponser from "../add-sponser/AddSponser";
import SponserItem from "./SponserItem";
import css from './SponsersView.module.scss';


const SponsersView = () => {
  const sponsers = useAppSelector(state => state.sponsers.sponsers)
/*   const sponsersFromStorage = localStorage.getItem("sponserArr");
  const sponsers:Sponser[] = JSON.parse(sponsersFromStorage!); */

  return (
    <div>
    <div className={`mb-3 ${css.titleAndButtonDiv}`}>
        <div className={css.emptyBox}></div>
        <div className={css.sponsersTitleDiv}> <h2>Our Sponsers</h2></div>
        <div className={`${css.addSpo}`}><AddSponser/></div>
    </div>
    <div className={css.mainSponsersDiv}>
        <div className="d-flex flex-wrap gap-3 justify-content-center">
            
          {sponsers.map((s)=> 
                <SponserItem key={s.id} {...s}/>)}   
        
    </div>
    </div>
    </div>
  )
}

export default SponsersView;