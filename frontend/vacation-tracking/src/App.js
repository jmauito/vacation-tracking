import './App.css';
import {BrowserRouter} from 'react-router-dom'
import UserProvider from './components/contextManager/UserProvider';
import { VacationTrackingApp } from './VacationTrackingApp';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <VacationTrackingApp />
      </BrowserRouter>
    </UserProvider>

  );
}

export default App;
