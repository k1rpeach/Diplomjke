import styled from "styled-components";

export const SCDetailsPageWrapper = styled.div`
  background-color: rgb(230, 230, 230);
  display: flex;
  justify-content: center; /* Центрируем содержимое по горизонтали */
  align-items: center; /* Центрируем содержимое по вертикали */
  min-height: 100vh; /* Задаем минимальную высоту блока равной высоте видимой области окна браузера */
  padding: 50px; /* Добавляем внутренние отступы */
  box-sizing: border-box; /* Учитываем внутренние отступы в вычислении размеров блока */

  .workFrame {
    gap: 50px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .workCard {
    background-color: lightgray;
    border: 1px solid black;
    border-radius: 5px;
    margin: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    width: 500px; /* Ширина карточки */
    height: 500px; /* Высота карточки */
    text-align: center;
    overflow: hidden; /* Скрытие избыточного содержимого, если оно есть */
    display: flex;
    flex-direction: column; /* Изменение направления флексбокса на вертикальное */
  }

  .workCard img {
    width: 100%;
    height: auto; /* Сохранение соотношения сторон */
    object-fit: cover; /* Масштабирование изображения с сохранением соотношения сторон */
    margin-bottom: 10px; /* Добавляем отступ снизу для разделения изображения и текста */
  }

  .cardText {
    margin-top: 10px;
  }
`;
