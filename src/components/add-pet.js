import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap'

/** Controlers */
import { createPet } from '../controllers/crud-pet'

/** Modal add new pet */
const AddPetModal = (props) => (
  <Modal isOpen={props.show} toggle={() => props.toggle(false)} autoFocus>
    <Form onSubmit={(event) => { createPet(event).then(props.update(true)) }}>
      <ModalHeader toggle={() => props.toggle(false)} className="text-center text-uppercase font-weight-light">Novo pet</ModalHeader>
      <ModalBody>
        <Row form>
          <Col md="8" xs="12">
            <FormGroup>
              <Label for="petName">Nome:</Label>
              <Input type="text" name="name" placeholder="Nome do pet" id="petName" style={{ borderRadius: 0 }} />
            </FormGroup>
          </Col>
          <Col md="4" xs="12">
            <FormGroup>
              <Label for="petSpecies">Espécie:</Label>
              <Input type="select" name="specie" id="petSpecies" style={{ borderRadius: 0 }}>
                <option value="dog">Canino</option>
                <option value="cat">Felino</option>
                <option value="other">Outro</option>
              </Input>
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