import React from 'react'
import { Link } from "react-router-dom"
import { Container, Row, Col, Jumbotron } from 'reactstrap'

const Erro404 = () => {
  return (
    <Container fluid className='bg-light'>
      <Row style={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
        <Col xs={{ size: 8, offset: 2 }}>
          <Jumbotron style={{ borderRadius: 0 }}>
            <h1 className="display-3">404</h1>
            <p className="lead">A página que você tentou acessar não está disponível.</p>
            <hr className="my-2" />
            <Link to="/">Voltar para home</Link>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  )
}

export default Erro404