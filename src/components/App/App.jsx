import Profile from "../Profile/Profile";
import TransactionHistory from "../TransactionsHistory/TransactionHistory";
import userData from "../../userData.json";
import FriendList from "../Friends/FriendList";
import transactions from "../../transactions.json";
import friends from "../../friends.json";
import css from "../App/App.module.css";

  const App = () => {
    return (
        <>
        <Profile 
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />
        <FriendList friends={friends} />
        <>
        <TransactionHistory items={transactions} />
    </>
      </>
    );
  };
 export default App;

