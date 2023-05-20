import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';



function Edit() {
  // const [employee, setEmployee] = useState([])

  let location=useNavigate()

  const [name, setName] = useState('')
  const [desig, setDesig] = useState('')
  const [sal, setSal] = useState(0)
  const [exp, setExp] = useState(0)

  const params = useParams()

  const fetchEmp = async () => {
    const result = await
      axios.get('http://localhost:8000/getEmployee/' + params.id)
      // setEmployee(result.data.message);
      setName(result.data.message.name);
      setDesig(result.data.message.designation);
      setSal(result.data.message.salary);
      setExp(result.data.message.experience);

  }

  const editEmployee=async(e)=>{
    e.preventDefault()

    const body={
      id:params.id,
      name,
      designation:desig,
      salary:sal,
      experience:exp
    }
    const result=await
    axios.post('http://localhost:8000/editEmployee/',body)
    location('/')
    alert(result.data.message)
  }

  useEffect(()=>{
    fetchEmp()
  },[])
  
  // console.log(employee);

  return (
    <div>
      <h1>
        <h1 className='text-center'>Update Employee</h1>
        <p className='p-5 fs-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorum itaque aliquam velit laborum dolores? Hic, unde quis, odit quia autem necessitatibus ex iure, rerum excepturi voluptatibus fuga quaerat provident!</p>
        <h3 className='text-center'>Employee data</h3>

        <form action="" className='text-center container w-50 p-5 '>
          <input onChange={(e)=>setName(e.target.value)} value={name} type="text" className='form-control mt-3' placeholder='employee name' name='n1' id='an1' />
          <input onChange={(e)=>setDesig(e.target.value)} value={desig}  type="text" className='form-control mt-3' placeholder='designation' name='n2' id='an2' />
          <input onChange={(e)=>setSal(e.target.value)} value={sal}  type="text" className='form-control mt-3' placeholder='salary' name='n3' id='an3' />
          <input onChange={(e)=>setExp(e.target.value)} value={exp}  type="text" className='form-control mt-3' placeholder='experience' name='n4' id='an4' />

          <button onClick={(e)=>editEmployee(e)} className='btn btn-dark mb-4 p-1 w-25 mt-4' >Update</button>
        </form>
      </h1>
    </div>
  )
}

export default Edit