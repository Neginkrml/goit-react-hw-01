const FriendListItem = () => {
  return (
    <>
      <div>
        <img src="" alt="Avatar" width="48" />
        <p>Friend name</p>
        <p>Friend status</p>
      </div>
    </>
  );
};

const FriendList = () => {
  <ul>
    {/* li sayısı, dizideki nesne sayısına bağlıdır */}
    <li>
      <FriendListItem />
    </li>
  </ul>;
};

export default FriendList;
