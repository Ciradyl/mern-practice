import React from "react";

import UsersList from "../components/UsersList";
import { DUMMY_USERS } from "../DUMMY_USERS";

const Users = () => {
  return (
    <>
      <UsersList items={DUMMY_USERS} />
    </>
  );
};

export default Users;
