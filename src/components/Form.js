import React from 'react';


const Form = ( { setInputText, todos, setTodos, inputText, setStatus }) => {
  const inputTextHandler  = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, {text: inputText, completed:false, id: Math.random() * 1000 }
    ]);
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  }
    return(
        <form>
        <input value={inputText} onChange={inputTextHandler} type="text" class="todo-input" />
        <button onClick={submitTodoHandler} class="todo-button" type="submit">
          <i class="fas fa-plus-square"></i>
        </button>
        <div class="select">
          <select onChange={statusHandler} name="todos" class="filter-todo">
            <option value="all">Todas</option>
            <option value="completed">Completas</option>
            <option value="uncompleted">Incompletas</option>
          </select>
        </div>
      </form>
    );
};


export default Form;