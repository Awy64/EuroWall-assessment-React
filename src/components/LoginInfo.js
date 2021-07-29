import React from 'react'
import { Card, Col } from 'react-bootstrap'
import CardHeader from 'react-bootstrap/esm/CardHeader'

const LoginInfo = ({credentials}) => {
  return (
    <Col md="4">
      <Card>
        <CardHeader>
          <h3>Login Information</h3>
        </CardHeader>
        <Card.Body sm>
          {credentials && Object.entries(credentials).map(([key, value]) => {
          return <p>{key}: {value} </p>
          })}
        </Card.Body>
      </Card>
    </Col>
  )
}

export default LoginInfo
