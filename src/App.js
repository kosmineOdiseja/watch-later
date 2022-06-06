import './App.css';
import React from 'react';
import { TodoProvider } from './components/context/TodoContext' 
import ContentList from './components/ContentList';
import Form from './components/Form'

function App() {

  return (
    <TodoProvider> 
      <div>
        <Form />
        <ContentList />
      </div>
    </TodoProvider>
  );
}

export default App;
