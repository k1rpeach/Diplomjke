import styled from "styled-components";

export const SCProfilePage = styled.div`
  display: flex;
  background-color: rgb(230, 230, 230);
  border-radius: 10px; /* Добавлен радиус границы */

  .workFrame {
    padding: 50px;
    gap: 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 80%;
    gap: 50px;
    display: flex;
    justify-content: center;
  }


  

  .workCard {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: lightgray;
  border: 1px solid black;
  border-radius: 25px;
  position: relative;
  transition: box-shadow 0.3s; /* Добавлено свойство анимации для box-shadow */
}

 

.workCard img {
  width: 20%; /* Уменьшаем ширину изображения для лучшего вписывания в карточку */
  border-radius: 25px;
  margin-top: 20px; /* Добавляем отступ сверху для изображения */
}


.workCard {
  background-color: lightgray;
  border: 1px solid black;
  border-radius: 25px;
  padding: 20px; /* Добавляем отступы внутри карточки */
  max-width: 80%; /* Ограничиваем максимальную ширину карточки */
}

.workCard h1 {
  margin: 10px 0; /* Добавляем немного отступов между текстовыми элементами внутри карточки */
}


.workCard::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 25px;
  box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.1); /* Черно-серая граница вокруг карточки */
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


  `


 