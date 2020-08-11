import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import AddForm from "./AddForm";

const Friends = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/api/friends")
      .then(res => setFriends(res.data))
      .catch(error => console.error(error));
  }, [friends]);

  return (
    <div>
      <AddForm />
      {friends.map(friend => (
        <div key={friend.id}>
          <h2>{friend.name}</h2>
          <h4>{friend.age} years old</h4>
          <p>Contact: {friend.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Friends;