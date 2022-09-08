import { useState } from 'react';
import './App.css';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import Counter from './components/class/Counter';
import { Box } from './components/context/Box';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { User } from './components/context/User';
import { UserContextProvider } from './components/context/UserContext';
import { Timer } from './components/effect/Timer';
import { List } from './components/generics/List';
import { CustomButton } from './components/html/Button';
import { Text } from './components/polymorphic/Text';
import { MutableRef } from './components/ref/MutableRef';
import { RandomNumber } from './components/restriction/RandomNumber';
import { Toast } from './components/templateLiterals/Toast';



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
      {/* <CustomButton variant='primary'
        onClick={() => console.log('clicked')
        }>Primary Button
      </CustomButton> */}

      <Text as='h1' size='lg'>Heading</Text>
      <Text as='p' size='md'>Paragraph</Text>
      <Text as='label' size='sm' color="secondary">Label</Text>
    </div >
  );
}

export default App;
