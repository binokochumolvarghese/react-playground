import Header from './components/UI/Header';
import AddNotes from './components/notes/AddNotes';
import NotesManager from './components/notes/NotesManager';

function App() {
  return (
    <div >
      <Header/>
      <AddNotes />
      <NotesManager/>
    </div>
  );
}

export default App;
