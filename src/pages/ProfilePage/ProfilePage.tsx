import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { changeUser } from "../../store/slices/userSlice";
import { Header } from "../../components/UI/Header/Header";
import { SCProfilePage } from "./ProfilePage.styled";

export const ProfilePage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.userSlice.user);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      const parsedUserData = JSON.parse(userData);
      setTimeout(() => {
        setLoading(false);
        dispatch(changeUser(parsedUserData));
      }, 1000);
    }
  }, []);

  return (
    <div className="ProfilePage">
      <Header />
      <SCProfilePage>
        {loading ? (
          <div className="loader-container">
            <img src="./img/users/loader.gif" alt="Загрузка..." />
            <p className="loading-text">Загрузка...</p>
          </div>
        ) : (
          <div className="workFrame">
            <div className="workCard">
              <img
                className="_no-select"
                src="./img/users/profile.jpg"
                alt="Profile"
              />
              <h1>Имя: {user?.name}</h1>
              <h1>Email: {user?.mail}</h1>
              <h1>Номер телефона: {user?.phone_number}</h1>
              <h1>ID пользователя: {user?.user_id}</h1>
              <h1>Город: {user?.city}</h1>
            </div>
          </div>
        )}
      </SCProfilePage>
    </div>
  );
};
