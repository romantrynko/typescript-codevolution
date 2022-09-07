import { ChangeEvent, MouseEvent, useState } from 'react';
import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Box } from './components/context/Box';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading ';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Counter } from './components/state/Counter';
import { LoggedIn } from './components/state/LoggedIn';
import { User } from './components/state/User';
import { Status } from './components/Status';

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

  // const handleClick = 

  return (
    <div className="App">
      <ThemeContextProvider>
        <Box/>
     </ThemeContextProvider>
      
    </div>
  );
}

export default App;
