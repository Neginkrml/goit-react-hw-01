import ProfileCss from "./Profile.module.css";

const Profile = ({
  username,
  tag,
  location,
  stats: { followers, views, likes },
}) => {
  return (
    <>
      <div className={ProfileCss.all}>
        <div className={ProfileCss.user}>
          <img
            className={ProfileCss.img}
            src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
            alt="User avatar"
          />
          <p className={ProfileCss.userName}>{username}</p>
          <p className={ProfileCss.userTag}>@{tag}</p>
          <p className={ProfileCss.userTag}>{location}</p>
        </div>

        <ul className={ProfileCss.userUl}>
          <li className={ProfileCss.userLi}>
            <span className={ProfileCss.userStats}>Followers</span>
            <span className={ProfileCss.userStatts}>{followers}</span>
          </li>
          <li className={ProfileCss.userLi}>
            <span className={ProfileCss.userStats}>Views</span>
            <span className={ProfileCss.userStatts}>{views}</span>
          </li>
          <li className={ProfileCss.userLi}>
            <span className={ProfileCss.userStats}>Likes</span>
            <span className={ProfileCss.userStatts}>{likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Profile;
