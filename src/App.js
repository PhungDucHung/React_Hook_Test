import { Container } from 'react-bootstrap';
import './App.scss';
import Header from './components/Header';
import TableUser from './components/TableUser';
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalAddNew from './components/ModalAddNew';
import { useState } from 'react';


const App = () => {

    const [isShowModalAddNew, setIsShowModalAddNew] = useState(false);

    const handleClose = () => {
        setIsShowModalAddNew(false);
    }

    return(
        <div className='app-container'> 
            <Header/>
                <Container>
                <div className='my-3 add-new'>
                    <span> <b>List Users</b></span>
                    <button 
                    className='btn btn-success'
                    onClick={() => setIsShowModalAddNew(true)}
                    >
                        Add new user
                    </button>
                </div>
                <TableUser/>
            </Container>
            <ModalAddNew
                show = {isShowModalAddNew}
                handleClose = {handleClose}
            />
        </div> 
    )
}

export default App;