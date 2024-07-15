import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
 import { postCreateUser } from '../services/UserService';
 import {  toast } from 'react-toastify';

const ModalEditUser = ( props ) => {
    const { show, handleClose } = props;
    const [ name , setName ] = useState("");
    const [ job , setJob ] = useState("");

    return (
        <>
             <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                <Modal.Title>Add new user</Modal.Title>
                </Modal.Header>

                <Modal.Body>
              <form>
                    <div className="form-group">
                        <label className='form-label'>Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label >Job</label>
                        <input 
                            type="text"  
                            className="form-control" 
                            value={job}
                            onChange={(event) => setJob(event.target.value)}
                        />
                    </div>
                    </form>
                </Modal.Body>

                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => handleSaveUser()} >Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default ModalEditUser