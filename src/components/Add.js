import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 as uuid } from "uuid"



function Add() {

  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [desig, setDesig] = useState('')
  const [sal, setSal] = useState(0)
  const [exp, setExp] = useState(0)

  useEffect(() => {
    setId(uuid().slice(0, 3))
  }, [])

  let location =useNavigate()

  const addEmployee = async (e) => {
    e.preventDefault()
    setId(uuid().slice(0, 3))
    const body = {
      id,
      name,
      designation: desig,
      salary: sal,
      experience: exp
    }
    const result = await axios.post('http://localhost:8000/addEmployee', body)
    location('/')
    alert(result.data.message)
  }



  console.log(id);
  console.log(name);
  console.log(desig);
  console.log(sal);
  console.log(exp);


  return (
    <div>
      <h1 className='text-center'>Add New Employee</h1>
      <p className='p-5 fs-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorum itaque aliquam velit laborum dolores? Hic, unde quis, odit quia autem necessitatibus ex iure, rerum excepturi voluptatibus fuga quaerat provident!</p>
      <h3 className='text-center'>Employee data</h3>

      <form action="" className='text-center container w-50 p-5 '>
        <input onChange={(e) => setName(e.target.value)} type="text" className='form-control mt-3' placeholder='employee name' name='n1' id='an1' />
        <input onChange={(e) => setDesig(e.target.value)} type="text" className='form-control mt-3' placeholder='designation' name='n2' id='an2' />
        <input onChange={(e) => setSal(e.target.value)} type="text" className='form-control mt-3' placeholder='salary' name='n3' id='an3' />
        <input onChange={(e) => setExp(e.target.value)} type="text" className='form-control mt-3' placeholder='experience' name='n4' id='an4' />

        <button className='btn btn-dark mb-4 p-1 w-25 mt-4' onClick={(e) => addEmployee(e)}>Add Employee</button>
      </form>

    </div>
  )
}

export default Add