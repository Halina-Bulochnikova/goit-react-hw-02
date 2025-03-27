import FriendListItem from "../../components/Friends/FriendListItem";
import css from "./Friends.module.css";

function FriendList({friends}) {
    return (
<ul className={css.friendList}>
{friends.map((friend) => (
        <li key={friend.id} className={css.friendItem}>
          <FriendListItem 
            avatar={friend.avatar} 
            name={friend.name} 
            isOnline={friend.isOnline} 
          />
        </li>
      ))}
</ul>
)
};
export default FriendList;