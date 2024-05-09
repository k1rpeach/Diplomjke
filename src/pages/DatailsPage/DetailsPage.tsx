import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useGetDetailsQuery ,useGetLyricsQuery } from "../../store/API/detailsApi";
import { SCDetailsPageWrapper } from "./DetailsPageWrapper.styled";
import { Header } from "../../components/UI/Header/Header";


export const DetailsPage = () => {
  const songId = useLocation();
  const pathname = songId.pathname.split("/details/").pop();
  const { data: detailsData, error: detailsError, isLoading: detailsLoading } = useGetDetailsQuery(pathname);
  const { data: lyricsData, error: lyricsError, isLoading: lyricsLoading } = useGetLyricsQuery(pathname);
  
  const [loading, setLoading] = useState(true); // Добавлено состояние loading

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return (
      <div className="DetailsPage">
        <Header />
        <SCDetailsPageWrapper>
          <div className="loader-container">
            <img src="/img/users/loader.gif" alt="Загрузка..." />
            <p className="loading-text">Загрузка...</p>
          </div>
        </SCDetailsPageWrapper>
      </div>
    );
  }

  return (
    <div className="DetailsPage">
      <Header />
      <SCDetailsPageWrapper>
        <div className="workFrame">
          {detailsData && (
            <div className="workCard" key={detailsData.song.release_date}>
              <img
                src={detailsData.song.custom_song_art_image_url}
                alt={`data ${detailsData.song.custom_song_art_image_url}`}
                id={`workCard-${detailsData.song.custom_song_art_image_url}`}
              />
              <div className="cardText">
                <span>Artist name: {detailsData.song.full_title}</span>
                <p>Release data {detailsData.song.release_date}</p>
              </div>
            </div>
          )}
          {lyricsData && <p dangerouslySetInnerHTML={{__html: lyricsData.lyrics.lyrics.body.html}}></p>}
        </div>
      </SCDetailsPageWrapper>
    </div>
  );
};
