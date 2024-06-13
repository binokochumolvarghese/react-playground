import './App.css';
import CallbackPage from '../src/components/CallbackPage' 
import NoCallbackPage from '../src/components/NoCallbackPage' 

function App() {

  return (
    <div className='wrapper'>
     <CallbackPage/>
     <NoCallbackPage/>
    </div>
  )
}

export default App
