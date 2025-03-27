import css from "./Friends.module.css";

function FriendListItem({avatar, name, isOnline}) {
    return (
        <div>
  <img src={avatar} alt={name} width="48" />
  <p className={css.friendItemText}>{name}</p>
  {isOnline ? <p className={css.online}>Online</p> : <p className={css.offline}>Offline</p>}
</div>
    )
}
export default FriendListItem;