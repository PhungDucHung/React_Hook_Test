import { Container } from 'react-bootstrap';
import './App.scss';
import Header from './components/Header';
import TableUser from './components/TableUser';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import Home from './components/Home';
import { Routes, Route ,Link} from 'react-router-dom';

const App = () => {

    return(
        <>
            <div className='app-container'> 
            <Header/>

                <Container>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/users" element={<TableUser/>} />
                </Routes>
                </Container>
            </div> 
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                />
        </>
    )
}

export default App;