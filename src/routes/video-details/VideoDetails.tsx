import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch,useAppSelector } from "../../app/hooks";
import css from './VideoDetails.module.scss';
import {FaHeart, FaRegHeart} from 'react-icons/fa';
import { toggleFavorite } from "../../features/videos/videosSlice";
import {AiOutlineRollback} from 'react-icons/ai';
import YouTube from "react-youtube";

const VideoDetails = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    //find the video was clicked by the user
    const video = useAppSelector(state => state.videos.videos.find(v=>v.id===id));
    
    //if the user enter inncorrect url
    if(!video) {
        return <Navigate to="/" />
    }

    const {snippet, statistics, isFavorite} = video;
    const videoPublishedDate = new Date(snippet.publishedAt.toString());


  return (
    <div className="w-75 mx-auto d-flex flex-column justify-content-center align-items-center mt-4">
        <h2 className={css.title}>{snippet.title}</h2>
        <p>published at: { videoPublishedDate.toDateString()}</p>

    <YouTube videoId={id} />
    <div className="text-center mt-4">
        <h3 className={css.desTitle}>Description:</h3>
        <p>{snippet.description}</p>
    </div>

    <div className={`btn ${css.favoriteBtn}`} onClick={()=>dispatch(toggleFavorite(video.id))}>
        {isFavorite&&<FaHeart size={70}/>} 
        {!isFavorite&&<FaRegHeart size={70}/>}
    </div>

    <section className={css.statistics}>
    <h3>Statistics:</h3>
    <div>
        <h4>views:</h4>
        <span>{Number(statistics.viewCount).toLocaleString("en-US")}</span>
    </div>
    <div>
        <h4>likes:</h4>
        <span>{Number(statistics.likeCount).toLocaleString("en-US")}</span>
    </div>
    <div>
        <h4>comments:</h4>
        <span>{Number(statistics.commentCount).toLocaleString("en-US")}</span>
    </div>
    </section>

    <div className={`btn m-2 ${css.backBtn}`} onClick={()=> {
        navigate(-1);
      }}><AiOutlineRollback size={50}/></div>
    </div>
  )
}

export default VideoDetails;