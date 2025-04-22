import FriendsCss from "./FriendList.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <div>
        <img src={avatar} alt={name} width="48" />
        <p>{name}</p>
        <p>{isOnline ? "online" : " offline"}</p>
      </div>
    </>
  );
};

const FriendList = ({ friends }) => {
  <ul>
    {friends.map((friend) => {
      return (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.isOnline}
          id={friend.id}
        />
      );
    })}
  </ul>;
};

export default FriendListItem;
