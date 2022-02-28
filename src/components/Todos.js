import Todo from "./Todo";

const Todos = ({ todos, setToDoList }) => {
  const allTodos = todos.map((t) => (
    <Todo id={t.id} toDoList={todos} setToDoList={setToDoList} key={t.id} todo={t} />
  ));

  return <div className="Todos">{allTodos}</div>;
};

export default Todos;
