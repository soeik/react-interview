import { ColoredItem } from "../../styled/ColoredItem";

// TODO: Реализовать отображение пяти пользователей с максимальным счетчиком count в виде строки
export const UsersCountRating = () => {
  const rating = "TODO";
  return (
    <div>
      <h2>Топ 5 пользователей с максимальным значением count</h2>
      <ColoredItem width="100%">{rating}</ColoredItem>
    </div>
  );
};
