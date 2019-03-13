import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap'

/** Controlers */
import { createTask } from '../controlers/crud-task'

/** Modal add new pet */
const AddPetModal = (props) => (
  <Modal isOpen={props.show} toggle={() => props.toggle(false)} autoFocus>
    <ModalHeader toggle={() => props.toggle(false)} className="text-center text-uppercase font-weight-light">Novo agendamento</ModalHeader>
    <ModalBody>
      <Form>
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
                <option value={null}>Não</option>
                <option value="weekly">Semanal</option>
                <option value="biweekly">Quinzenal</option>
                <option value="monthly">Mensal</option>
                <option value="halfYear">Semestral</option>
                <option value="yearly">Anual</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col xs="12">
            <FormGroup>
              <Label for="taskTitle">Descrição:</Label>
              <Input type="textarea" name="title" placeholder="Descrição" id="taskTitle" style={{ borderRadius: 0 }} />
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={() => null} style={{ borderRadius: 0 }}>Criar</Button>
      <Button color="secondary" onClick={() => props.toggle(false)} style={{ borderRadius: 0 }}>Cancelar</Button>
    </ModalFooter>
  </Modal>
)

export default AddPetModal