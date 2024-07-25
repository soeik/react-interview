import { UsersList } from "./components/UsersList";
import { NameInput } from "./components/NameInput";
import { UsersCountRating } from "./components/UsersCountRating";

export const App = () => {
  return (
    <>
      <NameInput />
      <UsersCountRating />
      <UsersList />
    </>
  );
};
