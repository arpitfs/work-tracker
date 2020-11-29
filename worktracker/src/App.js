import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState, useEffect } from 'react';
import { db } from "./firebase_config";
import firebase from "firebase";
import ToDoListItem from './ToDo'

function App() {

  const [todos, setToDos] = useState([]);
  const [toDoInput, setToDoInput] = useState("");

  useEffect(() => {
    getToDos();
  }, [])

  function getToDos() {
    console.log("Get Todos method");
    db.collection("todo").onSnapshot(function (querySnapshot) {
      setToDos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          inprogress: doc.data().inprogress,
        }))
      );
    });
  }

  function addToDo(e) {
    console.log("Button clicked method");

    e.preventDefault();
    db.collection("todo").add({
      inprogress: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: toDoInput,
    });

    setToDoInput("");

  }

  return (
    <div className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center"
      }}>
      <div>

        <h1>My Tracker ✔️</h1>
        <form>
          <TextField
            id="standard-name"
            label="Add to list"
            style={{ maxWidth: "300px", width: "100vw" }}
            value={toDoInput}
            onChange={(e) => setToDoInput(e.target.value)} />
          <Button
            type="submit"
            variant="contained"
            onClick={addToDo}
            style={{ display: "none" }}
          >Default</Button>
        </form>

        {todos.map((todo) => (
          <ToDoListItem
            todo={todo.todo}
            inprogress={todo.inprogress}
            id={todo.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
