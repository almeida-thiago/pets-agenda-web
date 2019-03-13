import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'

/** Modal add new pet */
const AddPetModal = (props) => (
  <Modal isOpen={props.show} toggle={() => props.toggle(false)} autoFocus>
    <ModalHeader toggle={() => props.toggle(false)} className="text-center text-uppercase font-weight-light">Novo pet</ModalHeader>
    <ModalBody >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={() => props.toggle(false)}>Do Something</Button>{' '}
      <Button color="secondary" onClick={() => props.toggle(false)}>Cancel</Button>
    </ModalFooter>
  </Modal>
)

export default AddPetModal