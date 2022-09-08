import { useState } from 'react';
import './App.css';
import { Box } from './components/context/Box';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { User } from './components/context/User';
import { UserContextProvider } from './components/context/UserContext';



function App() {
  const [value, setValue] = useState('')
  console.log(value);

  const personName = {
    first: 'Roman',
    last: 'Trynko'
  }

  const nameList = [
    {
      first: 'Roman',
      last: 'Trynko'
    }, {
      first: 'Bruce',
      last: 'Wayne'
    }, {
      first: 'Clark',
      last: 'Kent'
    }
  ]

  return (
    <div className="App">
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
