import "./App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updateUsername } from "./features/User";

function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState("");

  return (
    <div className="App">
      {""}
      <div className="addUsers">
        <input
          type="text"
          placeholder="Write yout name..."
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="Write yout username..."
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            dispatch(
              addUser({
                id: userList[userList.length - 1].id + 1,
                name,
                username,
              })
            );
          }}
        >
          {" "}
          Add User
        </button>
      </div>
      <div className="displayUsers">
        {userList.map((users) => {
          return (
            <div>
              <h1>{users.name}</h1>
              <h2>{users.username}</h2>
              <input
                type="text"
                placeholder="Write yout name..."
                onChange={(e) => {
                  setNewUsername(e.target.value);
                }}
              ></input>
              <button
                onClick={() =>
                  dispatch(
                    updateUsername({ id: users.id, username: newUsername })
                  )
                }
              >
                Update New Username
              </button>
              <button onClick={() => dispatch(deleteUser({ id: users.id }))}>
                Delete User
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
