export interface IRecommendationsResponse {
  song_recommendations: {
    recommendations: [
      {
        recommended_song: {
          id: number;
          header_image_url: string;
          artist_names: string;
          full_title: string;
        };
      }
    ];
  };
}

export interface IDetailsResponse {
  song: {
    custom_song_art_image_url: string;
    full_title: string;
    release_date: string;
  };
}
export interface ILyricsResponse {
  lyrics: {
    lyrics: {
      body: {
        [x: string]: ReactNode;
        html: string;
      };
    };
  };
}
