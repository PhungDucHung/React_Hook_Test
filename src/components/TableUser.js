import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { fetchAllUser } from '../services/UserService';

const TableUser = (props) => { 

const [listUsers , setListUsers ] = useState({});

useEffect(() => {
  getUsers();
},[])  

  const getUsers = async() => {
    let res = await fetchAllUser();
    if (res && res.data && res.data.data){
      setListUsers(res.data.data);
    }
  }

    return(
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Email</th>
                <th>First Name</th>
                <th>Last Name</th>
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
                    </tr>
                  )
              })}
              <tr>
       
              </tr>
            </tbody>
          </Table>
        </>
    )
}

export default TableUser