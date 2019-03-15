import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap'

/** Controlers */
import { createTask } from '../controllers/crud-task'

/** Modal add new pet */
const AddPetModal = (props) => (
  <Modal isOpen={props.show} toggle={() => props.toggle(false)} autoFocus>
    <Form onSubmit={(event) => { createTask(event, props.pet, props.widget); props.update(true) }}>
      <ModalHeader toggle={() => props.toggle(false)} className="text-center text-uppercase font-weight-light">Novo agendamento</ModalHeader>
      <ModalBody>
        <Row form>
          <Col md="5" xs="8">
            <FormGroup>
              <Label for="taskDate">Data:</Label>
              <Input type="date" name="date" id="taskDate" style={{ borderRadius: 0 }} />
            </FormGroup>
          </Col>
          <Col md="3" xs="4">
            <FormGroup>
              <Label for="taskTime">Hora:</Label>
              <Input type="time" name="time" id="taskTime" style={{ borderRadius: 0 }} />
            </FormGroup>
          </Col>
          <Col md="4" xs="12">
            <FormGroup>
              <Label for="petSpecies">Repetir:</Label>
              <Input type="select" name="repeat" id="taskRepeat" style={{ borderRadius: 0 }}>
                <option value="0">Não</option>
                <option value="weekly">1 semana</option>
                <option value="biweekly">15 dias</option>
                <option value="monthly">1 mês</option>
                <option value="halfYear">1 semestre</option>
                <option value="yearly">1 ano</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col xs="12">
            <FormGroup>
              <Label for="taskTitle">Descrição:</Label>
              <Input type="textarea" name="description" placeholder="Descrição" id="taskTitle" style={{ borderRadius: 0 }} />
            </FormGroup>
          </Col>
        </Row>
      </ModalBody>
      <ModalFooter>
        <Button type="submit" color="primary" onClick={() => props.toggle(false)} style={{ borderRadius: 0 }}>Criar</Button>
        <Button color="secondary" onClick={() => props.toggle(false)} style={{ borderRadius: 0 }}>Cancelar</Button>
      </ModalFooter>
    </Form>
  </Modal>
)

export default AddPetModal