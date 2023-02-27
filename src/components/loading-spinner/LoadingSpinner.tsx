import { TailSpin } from "react-loader-spinner"
import css from './LoadingSpinner.module.scss';

const LoadingSpinner = () => {
  return (
    <div className={css.loadingSpinnerDiv}>
        <TailSpin
        height="100"
        width="100"
        color="rgb(250, 40, 40)"
        />
    </div>
  )
}

export default LoadingSpinner