import { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { putUpdateUser } from '../services/UserService';

const ModalEditUser = (props) => {
    const { show, handleClose, dataUserEdit, handleEditUserFromModal } = props;
    const [name, setName] = useState("");
    const [job, setJob] = useState("");

    const handleEditUser = async () => {
        try {
            let res = await putUpdateUser(name, job);
            if (res && res.updatedAt) { // Assuming your response has a field like 'updatedAt'
                handleEditUserFromModal({
                    first_name: name,
                    id: dataUserEdit.id
                });
                handleClose();
                toast.success("Update user succeed!");
            } else {
                toast.error("Update user failed.");
            }
        } catch (error) {
            toast.error("Failed to update user: " + error.message);
        }
    };

    useEffect(() => {
        if (show) {
            setName(dataUserEdit.first_name);
            setJob(dataUserEdit.job); // Assuming dataUserEdit has a 'job' field
        }
    }, [ dataUserEdit]);
    // useEffect được kích hoạt mỗi khi giá trị trong mảng phụ thuộc thay đổi. Trong trường hợp này, nó sẽ chạy lại khi show hoặc dataUserEdit thay đổi.

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit a user</Modal.Title>
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
                            <label>Job</label>
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
                    <Button variant="primary" onClick={handleEditUser}>Confirm</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalEditUser;
