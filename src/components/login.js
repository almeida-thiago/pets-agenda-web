import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from "react-router-dom"
import { Container, Row, Col, Card, CardHeader, CardBody, Form, FormGroup, Input, Button, Alert } from 'reactstrap'

/** Controllers */
import { login, create } from '../controllers/login'

let Login = ({ history }) => {
  const [showMessage, setShowMessage] = useState(false) // Create food tasks
  return (
    <Container fluid className='bg-light'>
      <Row style={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
        <Col md={{ size: 4, offset: 4 }} xs={{ size: 8, offset: 2 }}>
          {showMessage ? (<Alert color="danger text-center" style={{ borderRadius: 0 }}><strong className="text-uppercase">Acesso negado!</strong><br />Verifique os dados informados.</Alert>) : null}
          <Card style={{ borderRadius: 0 }}>
            <CardHeader tag="h5" className="text-center text-uppercase font-weight-light">Acessar Agenda</CardHeader>
            <CardBody>
              <Form onSubmit={(event) => login(event, history, setShowMessage)}>
                <Row form>
                  <Col>
                    <FormGroup>
                      <Input type="email" name="email" placeholder="Login" autoFocus={true} style={{ borderRadius: 0 }} />
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col>
                    <FormGroup>
                      <Input type="password" name="password" placeholder="Senha" style={{ borderRadius: 0 }} />
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col>
                    <Button name="submit" color="primary" size="sm" block style={{ borderRadius: 0 }} className="text-uppercase font-weight-light">Entrar</Button>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
          <p className="text-center mt-2">
            <Link to="/new-user" className="text-decoration-none">Cadastrar novo usuário.</Link>
          </p>
        </Col>
      </Row>
    </Container>
  )
}

let CreateUser = ({ history }) => {
  return (
    <Container fluid className='bg-light'>
      <Row style={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
        <Col md={{ size: 4, offset: 4 }} xs={{ size: 8, offset: 2 }}>
          <Card style={{ borderRadius: 0 }}>
            <CardHeader tag="h5" className="text-center text-uppercase font-weight-light">Novo usuário</CardHeader>
            <CardBody>
              <Form onSubmit={(event) => create(event, history)}>
                <Row form>
                  <Col>
                    <FormGroup>
                      <Input type="email" name="email" placeholder="Login" autoFocus={true} style={{ borderRadius: 0 }} />
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col>
                    <FormGroup>
                      <Input type="password" name="password" placeholder="Senha" style={{ borderRadius: 0 }} />
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col>
                    <FormGroup>
                      <Input type="password" name="password-confirm" placeholder="Confirme a senha" style={{ borderRadius: 0 }} />
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col>
                    <Button type="submit" color="primary" size="sm" block style={{ borderRadius: 0 }} className="text-uppercase font-weight-light">Criar usuário</Button>
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

Login = withRouter(Login)
CreateUser = withRouter(CreateUser)
export { Login, CreateUser }