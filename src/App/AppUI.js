import React from 'react';
import { Titulo } from '../Titulo';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { CreateTodoButtonEnd } from '../CreateTodoButtonEnd';

function AppUI({ totalTodos, completedTodos, searchValue, setSearchValue, searchedTodos, completeTodo, deleteTodo }) {
  return (
    <React.Fragment>
      <Titulo />
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
      <CreateTodoButtonEnd />
    </React.Fragment>
  );
}

export { AppUI };