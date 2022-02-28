const Todo = ({ todo, id, toDoList, setToDoList }) => {

    const completeTodo = () =>{
        
        let copy = [...toDoList];
            var todo = copy.find(t => t.id === id);
            console.log(todo?.id)
        
            let result = arrayRemove(copy, todo);
            setToDoList(result);
        
     
      }

      const arrayRemove = (arr, value) => { 
    
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }
      
    return (
      <div className="todo">
        <h3> {todo.title}</h3>
        <p>{todo.content}</p>
        <button onClick={completeTodo}> complete </button>
      </div>
    );
  };
  
  export default Todo;
  