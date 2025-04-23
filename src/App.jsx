import React from "react";
import "modern-normalize";

import "./App.css";

import userData from "./data/userData.json";
import Profile from "./components/Profile";

import friends from "./data/friends.json";
import FriendList from "./components/FriendList";

import transactions from "./data/transactions.json";
import TransactionHistory from "./components/TransactionHistory";

const App = () => {
  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
