import { useAppSelector } from "../../app/hooks";
import VideoItem from "../videos/VideoItem";

const Favorites = () => {
    const {videos} = useAppSelector((state)=>state.videos);  
    const favoriteVideos = videos.filter(v=>v.isFavorite);  

    return (
        <div>
          <h1 className="text-center mt-5">Favorites</h1>
          <p className="text-center mt-2">Your Favorites Songs:</p>
          <div className="d-flex flex-row flex-wrap justify-content-center align-items-center">
            {favoriteVideos.map((v)=>
            <VideoItem key={v.id} {...v} />
        )}

          </div>
        </div>
    );
}

export default Favorites;