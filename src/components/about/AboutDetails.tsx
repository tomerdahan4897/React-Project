import { aboutSubTitle, aboutText1, aboutText2, aboutText3 } from "../../services/about-service";
import css from './AboutDetails.module.scss';

const AboutDetails = () => {
  return (
    <div>
        <section className={`shadow-lg my-5 border-secondary border-5 rounded border p-3  ${css.mainContent}`}>
            <h2 className={css.title}>{aboutSubTitle}</h2>
            <p className={css.text1}>{aboutText1}</p>
            <p className={css.text2}>{aboutText2}</p>
            <p className={css.text3}>{aboutText3}</p>
        </section>
    </div>
  )
}

export default AboutDetails;