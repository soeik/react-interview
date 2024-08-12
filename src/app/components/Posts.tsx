import { useEffect } from "react";

import { useDispatch } from "@/store";
import { fetchPosts, fetchUsers } from "../api";
import { fetchPostsSuccess, fetchUsersSuccess } from "../redux";
import { ColoredItem } from "../../styled/ColoredItem";
import { ListWrapper } from "../../styled/ListWrapper";

// Реализовать отображение списка постов по шаблону (имя пользователя, заголовок, счетчик лайков (кликов))
// <ColoredItem>
//   <div>{userName}</div>
//   <div>{title}</div>
//   <div>{likesCount}</div>
// </ColoredItem>

// Реализовать инкремент счетчика кликов (лайков) на пост (redux)

export const Posts = () => {
  const dispatch = useDispatch();

  const onPostClick = () => {
    // TODO: increment likes
  };

  return (
    <>
      <hr />
      <ListWrapper>
        {/* TODO: users list */}
        {/* Example */}
        <ColoredItem>
          <div>User Name</div>
          <div>Post Title</div>
          <div>100</div>
        </ColoredItem>
      </ListWrapper>
    </>
  );
};
