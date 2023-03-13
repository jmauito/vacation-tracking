import './App.css';
import { LoginPage } from './auth/pages/LoginPage';
import UserProvider from './components/contextManager/UserProvider';
//import { MainTemplate } from './components/template/MainTemplate';

function App() {
  return (
// <MainTemplate/> 
<UserProvider>
  <LoginPage/>
</UserProvider>
  );
}

export default App;
