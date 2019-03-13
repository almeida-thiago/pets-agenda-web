import React from 'react'
import { Link } from "react-router-dom"
import { Container, Row, Col, Card, CardHeader, CardBody, Form, FormGroup, Input, Button } from 'reactstrap'

const Login = () => {
  return (
    <Container fluid className='bg-light'>
      <Row style={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
        <Col md={{ size: 4, offset: 4 }} xs={{ size: 8, offset: 2 }}>
          <Card style={{ borderRadius: 0 }}>
            <CardHeader tag="h5" className="text-center text-uppercase font-weight-light">Acessar Agenda</CardHeader>
            <CardBody>
              <Form>
                <Row form>
                  <Col>
                    <FormGroup>
                      <Input type="email" name="email" placeholder="Login" autofocus="true" style={{ borderRadius: 0 }} />
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col>
                    <FormGroup>
                      <Input type="password" name="email" placeholder="Senha" style={{ borderRadius: 0 }} />
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col>
                    <Button color="primary" size="sm" block style={{ borderRadius: 0 }} className="text-uppercase font-weight-light">Entrar</Button>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
            <p className="text-center mt-2">
              <Link to="/forgot-password" className="text-decoration-none">Esqueceu a senha?</Link>
            </p>
        </Col>
      </Row>
    </Container>
  )
}

const Forgot = (props) => {
  return (
    <Container fluid className='bg-light'>
      <Row style={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
        <Col md={{ size: 4, offset: 4 }} xs={{ size: 8, offset: 2 }}>
          <Card style={{ borderRadius: 0 }}>
            <CardHeader tag="h5" className="text-center text-uppercase font-weight-light">Esqueceu a senha?</CardHeader>
            <CardBody>
              <Form>
                <Row form>
                  <Col>
                    <FormGroup>
                      <Input type="email" name="email" placeholder="email@provedor.com" style={{ borderRadius: 0 }} />
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col>
                    <Button color="primary" size="sm" block style={{ borderRadius: 0 }} className="text-uppercase font-weight-light">Recuperar senha</Button>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
            <p className="text-center mt-2">
              <Link to="/login" className="text-decoration-none">Voltar para o login.</Link>
            </p>
        </Col>
      </Row>
    </Container>
  )
}

export { Login, Forgot }