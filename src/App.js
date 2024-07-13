import './App.scss';
import Header from './components/Header';
import TableUser from './components/TableUser';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return(
        <div className='app-container'> 
            <Header/>
            <TableUser/>
        </div> 
    )
}

export default App;