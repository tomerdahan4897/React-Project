export type Video = {
  id: string;
  snippet: {
    publishedAt: string;
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
      };
      medium: {
        url: string;
      };
      high: {
        url: string;
      };
    };
    categoryId: string;
  };
  statistics: {
    viewCount: string;
    likeCount: string;
    dislikeCount: string;
    favoriteCount: string;
    commentCount: string;
  };
  isFavorite: Boolean = false;
};

export type Videos = {
  videos: Video[];
  loading: boolean;
  error: string;
};

export type conditions = {
  country: string;
  views?: string | undefined;
};
