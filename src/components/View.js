import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';



function View() {

  const [employee, setEmployees] = useState({})

  const params = useParams()
  console.log(params.id);

  //api call
  const fetchEmp = async () => {
    const result = await
      axios.get('http://localhost:8000/getEmployee/' + params.id)
    setEmployees(result.data.message);
    console.log(result.data.message);
  }
  // console.log(employee);

  useEffect(() => {
    fetchEmp()
  }, [])

  return (
    <div>

      <Row>
        <div className='text-center'>
        <Image style={{height:'500px',width:'500px'}} className=' p-5' src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg" roundedCircle />
        </div>
        <div className='text-center'>
        <Card className='text-center w-50 container mb-5' style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title className='text-white' style={{textTransform:'uppercase'}}>{employee.name}</Card.Title>
        <Card.Text>Employee ID - {employee.id}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Designation - {employee.designation}</ListGroup.Item>
        <ListGroup.Item>Experience - {employee.experience} Year</ListGroup.Item>
        <ListGroup.Item>Salary - {employee.salary}</ListGroup.Item>
      </ListGroup>

    </Card>
        </div>
      </Row>

    </div>
  )
}

export default View