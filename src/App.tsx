import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import { Bounce, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
   <>
   <ToastContainer
    position="bottom-left"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="colored"
    transition={Bounce}
    />
    <Router>
      <Routes/>
    </Router>
   </>
  );
}

export default App;
