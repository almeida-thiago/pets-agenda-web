import React, { useState } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Container, Row, Col, Input, Button } from 'reactstrap'

/** Controlers */
import { todayTasks, foodTasks, beautyTasks, vermTasks, vacinaTasks, vetTasks, otherTasks } from '../controlers/get-taks'
import { deleteFoodTask, deleteBeautyTask, deleteVermTask, deleteVacinaTask, deleteVetTask, deleteOtherTask } from '../controlers/delete-taks'

/** Components */
import Navegationbar from './navbar'
import Widget from './dashboard-widget'
import AddPetModal from './add-pet'

library.add([faPlus, faTrash]) // Add icon to use

/** Get current data */
const currentDate = () => {
  const dateNow = new Date() // Get currente date
  const date = `${dateNow.getDate()}/${dateNow.getMonth() + 1}/${dateNow.getFullYear()}` // Ajuste date to show
  return date
}

/** Show dashboard */
const Dashboard = () => {
  /**Modals */
  const [showAddPet, setShowAddPet] = useState(false) // Create new pet
  const [showAddFoodTasks, setShowAddFoodTasks] = useState(false) // Create food tasks
  const [showAddBeautyTasks, setShowAddBeautyTasks] = useState(false) // Create beauty tasks
  const [showAddVermTasks, setShowAddVermTasks] = useState(false) // Create verms tasks
  const [showAddVacinaTasks, setShowAddVacinaTasks] = useState(false) // Create vacina tasks
  const [showAddVetTasks, setShowAddVetTasks] = useState(false) // Create vet tasks
  const [showAddOtherTasks, setShowAddOtherTasks] = useState(false) // Create other tasks

  /** Select pet */
  const [selectedPet, setSelectedPet] = useState(null)
  return (
    <Container fluid className='bg-light' style={{ minHeight: '100vh' }}>
      <Navegationbar />
      <Row noGutters>
        <Col>
          <Input bsSize="sm" type="select" name="select" id="exampleSelect" onChange={(event) => setSelectedPet(event.target.value)} style={{ borderRadius: 0 }}>
            {!selectedPet ? (<option>Selecione um animal</option>) : null}
            <option value="1" defaultValue={selectedPet === '1' ? true : false}>Cacorro</option>
            <option value="2" defaultValue={selectedPet === '2' ? true : false}>gato</option>
          </Input>
        </Col>
        <Col xs="auto">
          <Button color="primary" size="sm" onClick={() => setShowAddPet(true)} style={{ borderRadius: 0 }}>
            <FontAwesomeIcon icon="plus" />
          </Button>
        </Col>
        <Col xs="auto">
          <Button color="danger" size="sm" disabled={selectedPet === null ? true : false} onClick={() => alert(selectedPet)} style={{ borderRadius: 0 }}>
            <FontAwesomeIcon icon="trash" />
          </Button>
        </Col>
      </Row>
      {selectedPet === null ? (
        <Row className="py-5 text-center text-muted ">
          <Col>Nenhum animal selecionado, escolha um no menu acima ou cadastre um novo.</Col>
        </Row>
      ) : (
          <Row>
            <Col md={{ size: 6 }} xs={{ size: 12 }} style={{ padding: 15 }}>
              <Widget title={`hoje ${currentDate()}`} data={todayTasks()} buttonAdd={null} buttonDelete={null} />
            </Col>
            <Col md={{ size: 3 }} xs={{ size: 12 }} style={{ padding: 15 }}>
              <Widget title="alimentação" data={foodTasks()} buttonAdd={() => setShowAddFoodTasks(true)} buttonDelete={deleteFoodTask} />
            </Col>
            <Col md={{ size: 3 }} xs={{ size: 12 }} style={{ padding: 15 }}>
              <Widget title="banho e tosa" data={beautyTasks()} buttonAdd={() => setShowAddBeautyTasks(true)} buttonDelete={deleteBeautyTask} />
            </Col>
            <Col md={{ size: 3 }} xs={{ size: 12 }} style={{ padding: 15 }}>
              <Widget title="vermifugação" data={vermTasks()} buttonAdd={() => setShowAddVermTasks(true)} buttonDelete={deleteVermTask} />
            </Col>
            <Col md={{ size: 3 }} xs={{ size: 12 }} style={{ padding: 15 }}>
              <Widget title="vacinação" data={vacinaTasks()} buttonAdd={() => setShowAddVacinaTasks(true)} buttonDelete={deleteVacinaTask} />
            </Col>
            <Col md={{ size: 3 }} xs={{ size: 12 }} style={{ padding: 15 }}>
              <Widget title="visitas ao veterinário" data={vetTasks()} buttonAdd={() => setShowAddVetTasks(true)} buttonDelete={deleteVetTask} />
            </Col>
            <Col md={{ size: 3 }} xs={{ size: 12 }} style={{ padding: 15 }}>
              <Widget title="outros" data={otherTasks()} buttonAdd={() => setShowAddOtherTasks(true)} buttonDelete={deleteOtherTask} />
            </Col>
          </Row>
        )}
      <AddPetModal show={showAddPet} toggle={setShowAddPet} />
      <AddPetModal show={showAddFoodTasks} toggle={setShowAddFoodTasks} />
      <AddPetModal show={showAddBeautyTasks} toggle={setShowAddBeautyTasks} />
      <AddPetModal show={showAddVermTasks} toggle={setShowAddVermTasks} />
      <AddPetModal show={showAddVacinaTasks} toggle={setShowAddVacinaTasks} />
      <AddPetModal show={showAddVetTasks} toggle={setShowAddVetTasks} />
      <AddPetModal show={showAddOtherTasks} toggle={setShowAddOtherTasks} />
    </Container>
  )
}

export default Dashboard