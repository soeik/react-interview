import { Posts } from "./components/Posts";
import { NameInput } from "./components/NameInput";
import { UsersCountRating } from "./components/PostsRating";

export const App = () => {
  return (
    <>
      <NameInput />
      <UsersCountRating />
      <Posts />
    </>
  );
};
