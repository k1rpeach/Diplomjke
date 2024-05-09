import styled from "styled-components";

export const SCMainPage = styled.div`
  display: flex;
  background-color: rgb(230, 230, 230);
  border-radius: 10px; /* Добавлен радиус границы */

  .favoriteTracks h2 {
    text-align: center;
    padding-top: 50px;
    font-size: 45px;
  }

  .loader-container {
  display: flex;
  justify-content: center; /* Выравнивание по горизонтали */
  align-items: center; /* Выравнивание по вертикали */
  position: fixed; /* Фиксированная позиция для отображения по центру экрана */
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.5); /* Добавлен полупрозрачный фон */
}

  .workFrame {
    padding: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 50px;
  }
.ProfilePage{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

  .ProfilePage .workCard { 
    display: flex;
    justify-content: center;
    width: 500px;
    gap: 50px;
  }

  .workCard {
    background-color: lightgray;
    border: 1px solid black;
    border-radius: 25px;
    position: relative;
    transition: box-shadow 0.3s; /* Добавлено свойство анимации для box-shadow */
  }

  .workCard:hover {
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75); /* Анимированный box-shadow при наведении */
  }

  .workCard img {
    width: 100%;
    border-radius: 25px;
    height: 70%;
    border-bottom: 1px solid black;
  }

  .iconWrapper {
    position: absolute;
    bottom: 5px;
    right: 5px;
  }

  .iconWrapper img {
    width: 30px; /* Уменьшение размера иконки по умолчанию */
    height: 30px; /* Уменьшение размера иконки по умолчанию */
    cursor: pointer;
    transition: background-color 0.3s, padding 0.3s, border-radius 0.3s, width 0.3s, height 0.3s; /* Добавлено свойство анимации для background-color, padding, border-radius, width и height */
    border-radius: 50%; /* Добавлен border-radius для создания круглой формы */
  }

  .iconWrapper img.active {
    background-color: rgba(255, 255, 255, 0.5);
    padding: 10px; /* Увеличение размера фона */
    border-radius: 50%; /* Увеличение border-radius для сохранения круглой формы */
    width: 50px; /* Увеличение размера иконки при нажатии */
    height: 50px; /* Увеличение размера иконки при нажатии */
  }

  .cardText {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 0.5fr 0.5fr;
    grid-template-areas: "b d" "c e";
    gap: 20px;
    padding: 10px;
  }

  .link {
    text-decoration: none; /* Убираем подчеркивание */
  }
`;


