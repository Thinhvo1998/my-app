import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalContainer from './containers/ModalContainer';
import { AppContainerProvider } from './contexts/AppContainer.context';
import TableContainer from './containers/TableContainer';
function App() {
  return (
    <AppContainerProvider>
         <div>
            <ModalContainer/>
            <h1>Danh Sách Accounts 1234</h1>
            <TableContainer/>
         </div> 
      </AppContainerProvider>
  );
}

export default App;