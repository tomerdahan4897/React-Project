import { Video } from "../features/videos/vidoes";

const ApiKey = `AIzaSyAiFJ3eNv3QRJ1nVmV0jPobNg6wk1gghos`;

export const YouTubeApiUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IL&videoCategoryId=10&key=${ApiKey}
`;
export const fetchVideos = (country = "IL", views?: string) =>
  fetch(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=${country}&videoCategoryId=10&key=${ApiKey}`
  )
    .then((res) => res.json())
    .then((json) => json.items as Video[])
    .then((items) => {
      if (views !== undefined) {
        let arr = items.filter(
          (v) => Number(v.statistics.viewCount) <= Number(views)
        );
        arr.forEach((v) => {
          v.isFavorite = false;
          console.log(arr);
        });
        return arr;
      } else {
        items.forEach((v) => {
          v.isFavorite = false;
        });
      }
      return items;
    });
