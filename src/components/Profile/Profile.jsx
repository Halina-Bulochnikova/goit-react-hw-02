import css from "./Profile.module.css";

function Profile({name, tag, location, image, stats}) {
    return <div className={css.profile}>
  <div>
    <img
      src={image}
      alt={stats}
    />
    <h2>{name}</h2>
    <p>{tag}</p>
    <p>{location}</p>
  </div>

  <ul className={css.stats}>
    <li className={css.statItem}>
      <span>Followers</span>
      <span>{stats.followers}</span>
    </li>
    <li className={css.statItem}>
      <span>Views</span>
      <span>{stats.views}</span>
    </li>
    <li className={css.statItem}>
      <span>Likes</span>
      <span>{stats.likes}</span>
    </li>
  </ul>
</div>
}
export default Profile;