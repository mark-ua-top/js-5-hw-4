import "./App.css";
import Statistics from "./components/Statistics/Statistics";
import data from "./data/data.json";
import FriendList from "./components/FriendList/FriendList";
import friends from "./data/friends.json";

function App() {
  return (
    <div className="App">
      <Statistics title="File upload stats" stats={data} />
      <FriendList friends={friends} />
    </div>
  );
}

export default App;
