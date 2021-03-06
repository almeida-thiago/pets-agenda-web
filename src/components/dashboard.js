import React, { useState, useEffect } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Container, Row, Col, Input, Button } from 'reactstrap'

/** Controllers */
import { listPets, deletePet } from '../controllers/crud-pet'

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

/** List pets */
const petsList = async (select) => {
  const pets = await listPets()
  const petsList = []
  pets.forEach(pet => {
    petsList.push((<option key={pet._id} value={pet._id} defaultValue={select === pet.id ? true : false}>{pet.name}</option>))
  })
  return petsList
}

/** Show dashboard */
const Dashboard = () => {
  const [showAddPet, setShowAddPet] = useState(false) // Modal create new pet
  const [selectedPet, setSelectedPet] = useState(null) // Select pet
  const [listPet, setlistPet] = useState([]) // Pets list
  const [updateList, setUpdateList] = useState(true) // List update

  /** Side effects */
  useEffect(() => {
    if (updateList) petsList(selectedPet).then(
      data => {
        setlistPet(data)
      }
    )
    setUpdateList(false)
  })

  return (
    <Container fluid className='bg-light' style={{ minHeight: '100vh' }}>
      <Navegationbar />
      <Row noGutters>
        <Col>
          <Input bsSize="sm" type="select" name="select" id="exampleSelect" onChange={(event) => setSelectedPet(event.target.value)} style={{ borderRadius: 0 }}>
            {!selectedPet ? (<option>Selecione um animal</option>) : null}
            {listPet}
          </Input>
        </Col>
        <Col xs="auto">
          <Button color="primary" size="sm" onClick={() => setShowAddPet(true)} style={{ borderRadius: 0 }}>
            <FontAwesomeIcon icon="plus" />
          </Button>
        </Col>
        <Col xs="auto">
          <Button color="danger" size="sm" disabled={selectedPet === null ? true : false} onClick={() => { deletePet(selectedPet); setSelectedPet(null); setUpdateList(true) }} style={{ borderRadius: 0 }}>
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
              <Widget title={`hoje ${currentDate()}`} pet={selectedPet} widget='today' noButton={true} />
            </Col>
            <Col md={{ size: 3 }} xs={{ size: 12 }} style={{ padding: 15 }}>
              <Widget title="alimentação" pet={selectedPet} widget='food' />
            </Col>
            <Col md={{ size: 3 }} xs={{ size: 12 }} style={{ padding: 15 }}>
              <Widget title="banho e tosa" pet={selectedPet} widget='beauty' />
            </Col>
            <Col md={{ size: 3 }} xs={{ size: 12 }} style={{ padding: 15 }}>
              <Widget title="vermifugação" pet={selectedPet} widget='verm' />
            </Col>
            <Col md={{ size: 3 }} xs={{ size: 12 }} style={{ padding: 15 }}>
              <Widget title="vacinação" pet={selectedPet} widget='vacina' />
            </Col>
            <Col md={{ size: 3 }} xs={{ size: 12 }} style={{ padding: 15 }}>
              <Widget title="visitas ao veterinário" pet={selectedPet} widget='vet' />
            </Col>
            <Col md={{ size: 3 }} xs={{ size: 12 }} style={{ padding: 15 }}>
              <Widget title="outros" pet={selectedPet} widget='other' />
            </Col>
          </Row>
        )}
      <AddPetModal show={showAddPet} toggle={setShowAddPet} update={setUpdateList} />
    </Container>
  )
}

export default Dashboard