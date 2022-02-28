import Form from "./components/Form";
import Todos from "./components/Todos";
import {  useState } from "react";

export default function App() {
  const [toDoList, setToDoList] = useState([]);


  const addToDo = (title, content) => {
    let copy = [...toDoList];

    copy.push({
      id: toDoList.length + 1,
      title: title,
      content: content
    });
    setToDoList(copy);
    console.log(toDoList)
  };
 
  return (
    <div className="App">
      <Form addToDo={addToDo} />
      <Todos setToDoList={setToDoList} todos={toDoList} />
    </div>
  );
}
