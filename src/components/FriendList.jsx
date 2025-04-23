import FriendsCss from "./FriendList.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={FriendsCss.frienddList}>
      <img className={FriendsCss.fLimg} src={avatar} alt={name} width="48" />
      <p className={FriendsCss.fLName}>{name}</p>
      <p
        className={`${FriendsCss.isOnline} ${
          isOnline ? FriendsCss.online : FriendsCss.offline
        }`}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

const FriendList = ({ friends }) => {
  return (
    <ul className={FriendsCss.friendList}>
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
