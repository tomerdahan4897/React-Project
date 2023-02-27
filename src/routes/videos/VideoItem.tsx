import {Link} from 'react-router-dom'
import { VideoItemProps } from '../../@types/types'
import {GrCircleInformation} from 'react-icons/gr';
import css from './VideoItem.module.scss';
import YouTube ,{YouTubeProps} from 'react-youtube';
import {FaHeart, FaRegHeart} from 'react-icons/fa';
import { toggleFavorite } from '../../features/videos/videosSlice';
import { useAppDispatch } from '../../app/hooks';

//change the sizes of the videos
 const youTubeSize: YouTubeProps["opts"] = {
  height: 220,
  width: 290,
}; 

const VideoItem = ({id, snippet, statistics, isFavorite}:VideoItemProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className={`w-60 shadow-lg my-5 border-secondary border-5 rounded border p-3 d-flex flex-column align-items-center ${css.mainCard}`}>
        <h2 className={css.title}>{snippet.title.slice(0,25)}</h2>
           <YouTube videoId={id} opts={youTubeSize} />
           <span>Views: {Number(statistics.viewCount).toLocaleString("en-US")}</span>

        <div className={`btn ${css.favoriteBtn}`} onClick={()=> dispatch(toggleFavorite(id))}>
        {isFavorite&&<FaHeart size={30} color="red"/>} 
        {!isFavorite&&<FaRegHeart size={30} color="red"/>} 
    </div>
    <Link className={css.link} to={`/videos/${id}`}><GrCircleInformation size={35} color="green"/></Link>
       
    </div>
  )
}

export default VideoItem;