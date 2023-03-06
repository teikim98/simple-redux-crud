import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const userList = useSelector((state) => state.users.value);
  return (
    <div className="App">
      {""}
      <div className="addUsers">
        <input type="text" placeholder="Write yout name..."></input>
        <input type="text" placeholder="Write yout username..."></input>
        <button>Add User</button>
      </div>
      <div className="displayUsers">
        {userList.map((users) => {
          return (
            <div>
              <h1>{users.name}</h1>
              <h2>{users.username}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
