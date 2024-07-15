import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import { fetchAllUser } from '../services/UserService';
import ReactPaginate from 'react-paginate';
import ModalAddNew from './ModalAddNew';
import {  toast } from 'react-toastify';


const TableUser = (props) => { 

const [listUsers , setListUsers ] = useState({});
const [totalUsers , setTotalUsers] = useState(0);  // muốn lấy gì trong api phải tạo biến để chứa cái đó
const [totalPages , setTotalPages] = useState(0); 


const [isShowModalAddNew, setIsShowModalAddNew] = useState(false);

const handleClose = () => {
    setIsShowModalAddNew(false);
}

const handleUpdateTable = (user) => {
  setListUsers([user, ...listUsers]);
}

useEffect(() => {
  getUsers(1);
},[])  

  const getUsers = async(page) => {
    let res = await fetchAllUser(page);
    if (res && res.data){
      setListUsers(res.data);  // chỉ lấy data thui 
      setTotalUsers(res.total); // chỉ lấy total
      setTotalPages(res.total_pages);
    }
  }

  const handlePageClick = (event) => {
    console.log("check event: " , event);  
       getUsers(+event.selected + 1);
  }


    return(
        <>
        <div className='my-3 add-new'>
          <span> <b>List Users</b></span>
          <button 
          className='btn btn-success'
          onClick={() => setIsShowModalAddNew(true)}
          >
              Add new user
          </button>
          </div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Email</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Action</th>

              </tr>
            </thead>
            <tbody>
              {listUsers && listUsers.length > 0 && listUsers.map((item, index) => {
                  return (
                    <tr key={`user-${index}`} >  
                     {/* user là chuỗi text ko phải biến index */}
                        <td>{item.id}</td>
                        <td>{item.email}</td>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td>
                            <button className='btn btn-warning mx-3'>Edit</button>
                            <button className='btn btn-danger'>Delete</button>
                        </td>
                    </tr>
                  )
              })}
              <tr>
       
              </tr>
            </tbody>
          </Table>
          <ReactPaginate
              breakLabel="..."
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={totalPages}
              pageClassName='page-item'
              pageLinkClassName="page-link"
              previousLinkClassName="page-link"
              previousClassName='page-item'
              nextClassName='page-item'
              nextLinkClassName="page-link"
              breakClassName='page-item'
              breakLinkClassName='page-link'
              containerClassName="pagination"
              previousLabel="< previous"
              activeClassName="active" 
          />
               <ModalAddNew
                    show = {isShowModalAddNew}
                    handleClose = {handleClose}
                    handleUpdateTable = {handleUpdateTable}
                />
        </>
    )
}

export default TableUser