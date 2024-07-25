import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getUsers } from "../users";
import { fetchUsersSuccess } from "../redux";
import { ColoredItem } from "../../styled/ColoredItem";
import { ListWrapper } from "../../styled/ListWrapper";

// Реализовать отображение списка пользователей по шаблону (имя пользователя и счетчик кликов)
// <ColoredItem>
//   <div>{name}</div>
//   <div>{count}</div>
// </ColoredItem>

// Реализовать инкремент счетчика кликов на элементе пользователя (redux)

// Реализовать отображение счетчика совпадений (в т.ч. частичного) введенного имени с существующим списком
// <ColoredItem>
// <h1>Совпадений: {matchesCount}</h1>
// </ColoredItem>

export const UsersList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsersSuccess(getUsers(100)));
  }, []);

  const onUserClick = () => {
    // TODO: increment
  };

  return (
    <>
      {/* TODOL matches */}
      <hr />
      <ListWrapper>{/* TODO: users list */}</ListWrapper>
    </>
  );
};
