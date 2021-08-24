import React from 'react'
import { Card } from 'react-bootstrap'
const Todoitem = ({item}) => {
    return (
        <div>
            <Card style={{ width: '50rem' , display:'flex',margin:'10px auto' }}>
  <Card.Body>
    <Card.Title>{item.titel}</Card.Title>
    <Card.Text>{item.discreption}</Card.Text>
 <h3 style={{color:item.isDone?"green":"red"}}> {item.isDone?"done!":"not done"} </h3>
  </Card.Body>
</Card>  
        </div>
    )
}

export default Todoitem
