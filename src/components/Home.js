import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';



function Home() {

    const [employees, setEmployees] = useState([])

    //api call
    const fetchEmployees = async () => {
        const result = await axios.get('http://localhost:8000/getAllEmployees')
        setEmployees(result.data.message);
    }


    //api to delete

    const deleteEmployee = async (id) => {
        const result = await axios.delete(`http://localhost:8000/deleteEmployee/`+id)
        alert(result.data.message)
        fetchEmployees()

    };

    console.log(employees);

    useState(() => {
        fetchEmployees()
    }, [])

    return (
        <div className='container'>
            <div className='w-100 p-4 text-center container bg-success mt-5 text-black'>
                <h2>Employee Management System</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae libero velit, assumenda architecto saepe, consequatur ipsam cupiditate labore atque nisi eligendi sequi officiis esse eaque laudantium ab iure dolorum quis?</p>
            </div>
            <Table striped bordered hover variant="dark" className='mt-5'>
                <thead>
                    <tr className='text-center'>
                        <th>#</th>
                        <th>ID</th>
                        <th>Full Name</th>
                        <th>Designation</th>
                        <th>Salary</th>
                        <th>Experience</th>
                        <th>Actions</th>

                    </tr>
                </thead>
                <tbody className='text-center'>


                    {
                        employees?.map((employee, index) => (
                            <tr>
                                <td>{index}</td>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.designation}</td>
                                <td>{employee.salary}</td>
                                <td>{employee.experience}</td>

                                <td>
                                    <Link to={`Edit/${employee.id}`}>
                                        <a className='text-info' href=""><i class="fa-solid fa-pencil"></i></a> &nbsp;&nbsp;
                                    </Link>

                                    <Link to={`View/${employee.id}`}>
                                        <a className='text-light' href=""><i class="fa-solid fa-eye"></i></a>&nbsp;&nbsp;&nbsp;
                                    </Link>

                                    <Link >
                                    <button onClick={() => deleteEmployee(employee.id)}>delete</button>
                                        {/* <a onClick={() => deleteEmployee(employee.id)} className='text-danger' href=""><i class="fa-solid fa-trash"></i></a>&nbsp; */}
                                    </Link>

                                </td>
                            </tr>
                        ))
                    }


                </tbody>
            </Table>
        </div>
    )
}

export default Home