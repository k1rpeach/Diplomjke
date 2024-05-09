import { useState, useEffect } from "react";
import { SCMainPage } from "../MainPage/MainPage.styled"; 
import { Header } from "../../components/UI/Header/Header";
import { Link } from "react-router-dom";

export const Favorites = () => {
  const [loading, setLoading] = useState(true); // Добавлено состояние loading
  // Получаем избранные песни из локального хранилища
  const favoriteTracks = JSON.parse(localStorage.getItem("favoriteTracks") || "[]");

  // Функция для удаления карточки из localStorage
  const removeFromFavorites = (idToRemove: string) => {
    const updatedFavorites = favoriteTracks.filter((track: any) => track.id !== idToRemove);
    localStorage.setItem("favoriteTracks", JSON.stringify(updatedFavorites));
    // Обновляем компонент, чтобы отобразить изменения
    window.location.reload();
  };

  // Добавим проверку наличия данных в favoriteTracks
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return (
      <SCMainPage className="Favorites">
        <Header />
        <div className="loader-container">
          <img src="./img/users/loader.gif" alt="Загрузка..." />
          <p className="loading-text">Загрузка...</p>
        </div>
      </SCMainPage>
    );
  }

  if (!favoriteTracks || favoriteTracks.length === 0) {
    return (
      <SCMainPage className="Favorites">
        <Header />
        <div className="favoriteTracks">
          <h2>Избранные песни</h2>
          <p>Нет избранных песен</p>
        </div>
      </SCMainPage>
    );
  }

  return (
    <SCMainPage className="Favorites"> 
      <Header/> 
      <div className="favoriteTracks">
        <h2>Избранные песни</h2>
        <div className="workFrame">
          {favoriteTracks.map((track: any, idx: number) => (
            <div className="workCard" key={idx}>
              <Link to={`/details/${track.id}`}>
                <img src={track.header_image_url} alt={`Property ${idx}`} />
              </Link>
              <div className="cardText">
                <span>Artist name: {track.artist_names}</span>
                <p>ID: {track.id}</p>
                <span>Title: {track.full_title}</span>
                {/* Кнопка (иконка) для удаления карточки */}
                <button onClick={() => removeFromFavorites(track.id)}>Убрать из избранного</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SCMainPage>
  );
};
