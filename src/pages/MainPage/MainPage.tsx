import { useState, useEffect } from "react";
import { Header } from "../../components/UI/Header/Header";
import { SCMainPage } from "./MainPage.styled";
import { useGetPropertiesQuery } from "../../store/API/userApi";
import { Link } from "react-router-dom";

export const MainPage = () => {
  const { data, error, isLoading } = useGetPropertiesQuery("");
  const [favoriteTracks, setFavoriteTracks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true); // Добавлено состояние loading

  useEffect(() => {
    const storedFavoriteTracks = JSON.parse(localStorage.getItem("favoriteTracks") || "[]");
    setFavoriteTracks(storedFavoriteTracks);
  }, []);

  const handleToggleFavorite = (track: any) => {
    const updatedFavorites = favoriteTracks.some(item => item.id === track.id)
      ? favoriteTracks.filter(item => item.id !== track.id)
      : [...favoriteTracks, track];
    setFavoriteTracks(updatedFavorites);
    localStorage.setItem("favoriteTracks", JSON.stringify(updatedFavorites));
  };

  const isFavorite = (trackId: string) => favoriteTracks.some(item => item.id === trackId);

  const song = data?.chart_items;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="MainPage">
      <Header />
      <SCMainPage>
        {isLoading || loading ? ( // Добавлено условие isLoading или loading
          <div className="loader-container">
            <img src="./img/users/loader.gif" alt="Загрузка..." />
            <p className="loading-text">Загрузка...</p>
          </div>
        ) : (
          <div className="MainPageFrame">
            <div className="workFrame">
              {song &&
                song.map((elem, idx) => (
                  <div className="workCard" key={idx}>
                    <Link to={`/details/${elem.item.id}`}>
                      <img src={elem.item.header_image_url} alt={`Property ${idx}`} id={`workCard-${idx}`} />
                    </Link>
                    <div className="cardText">
                      <span>Artist name: {elem.item.artist_names}</span>
                      <p>ID: {elem.item.id}</p>
                      <span>Title: {elem.item.full_title}</span>
                      <div className="iconWrapper">
                        <img
                          src="/img/icons/melody_icon.png"
                          alt={`Melody Icon ${idx}`}
                          className={isFavorite(elem.item.id) ? "active" : ""}
                          onClick={() => handleToggleFavorite(elem.item)}
                        />
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </SCMainPage>
    </div>
  );
};

