import './App.css';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading ';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

function App() {
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
      <Greet name='Roman' messageCount={20} isLoggedIn={false} />
      <hr />
      <Person name={personName} />
      <hr />
      <PersonList names={nameList} />
      <hr />
      <Status status={'loading'} />
      <hr />
      <Oscar>
        <Heading>Children props text type</Heading>
      </Oscar>
      <hr />
    </div>
  );
}

export default App;
