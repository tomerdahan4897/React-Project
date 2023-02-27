import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import ChoosePlace from "../../components/choose-favorite-place/ChoosePlace";
import LoadingSpinner from "../../components/loading-spinner/LoadingSpinner";
import { fetchVideo } from "../../features/videos/videosSlice";
import VideoItem from "./VideoItem";
import ServerErrorPage from "../../components/serverErrorPage/ServerErrorPage";
import { Bars } from 'react-loader-spinner'

const VideoView = () => {
const dispatch = useAppDispatch();
const {videos, error, loading} = useAppSelector((state)=>state.videos);


 useEffect(()=> {
  dispatch(fetchVideo({country: "IL"}));
},[dispatch]); 

return (
    <div>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <h1 className='mb-4 mt-5 text-center'>Most Popular Music Videos</h1>
        <Bars
        height="50"
        width="50"
        color="rgb(250, 40, 40)"
        />
        </div>
      {loading && <LoadingSpinner/>}
      {error && <ServerErrorPage/>}
      {videos.length > 0 && <ChoosePlace/>}
      <div className="d-flex flex-wrap justify-content-center gap-5">
      {videos.length > 0 && (
          videos.map((v)=> 
                <div><VideoItem key={v.id} {...v}/></div>)   
        )}
        </div>
    </div>
)
}
export default VideoView;