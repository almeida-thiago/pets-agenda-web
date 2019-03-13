import React, { useState } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faCalendar, faCalendarPlus, faCalendarMinus } from '@fortawesome/free-solid-svg-icons'
import { Card, CardBody, CardHeader, Table, Button } from 'reactstrap'

/** Controlers */
import { listTask, deleteTask } from '../controlers/crud-task'

/** Components */
import AddTaskModal from './add-task'

library.add([faChevronRight, faCalendar, faCalendarPlus, faCalendarMinus]) // Add icon to use

const ItemList = (props) => (
  <tr>
    <td className="w-75"><small><FontAwesomeIcon icon="calendar" /> 10/10/2010 às 20h:30m</small><br /><FontAwesomeIcon icon="chevron-right" /> Otto</td>
    {props.buttonDelete ? ( // If has an option to delete
      <td className="text-right">
        <Button onClick={props.buttonDelete} color="link" size="sm" style={{ borderRadius: 0, color: '#dc3545' }} className="rounded-circle">
          <FontAwesomeIcon icon="calendar-minus" />
        </Button>
      </td>
    ) : null}
  </tr>
)

const Itens = (props) => {
  let data = listTask(props.pet, props.widget)
  /** Return message if empty data */
  if (!data.length) return (<React.Fragment><tr></tr><tr><td className="text-muted text-center px-3 py-4">Não há agendamentos.</td></tr></React.Fragment>)
  const render = []
  /** Loop data */
  data.forEach(item => {
    render.push(<ItemList key={item.id} buttonDelete={props.widget !== 'today' ? () => deleteTask(props.widget, item.id) : null} />)
  })
  return render
}

const Widget = (props) => {
  /** Modals */
  const [showAddTask, setShowAddTask] = useState(false) // Create food tasks

  return (
    <React.Fragment>
      <Card style={{ borderRadius: 0 }}>
        <CardHeader tag="h6" className="text-center text-uppercase font-weight-light">{props.title}</CardHeader>
        <CardBody className="p-0" style={{ height: !props.noButton ? '250px' : '280px', overflow: 'auto' }}>
          <Table className="m-0" size="sm" responsive borderless striped hover>
            <tbody>
              <Itens pet={props.pet} widget={props.widget} />
            </tbody>
          </Table>
        </CardBody >
        {
          !props.noButton ? (
            <CardBody className="p-0">
              <Button size="sm" block onClick={() => setShowAddTask(true)} style={{ borderRadius: 0 }} className="text-uppercase font-weight-bold">
                <FontAwesomeIcon icon="calendar-plus" /> Adicionar novo
            </Button>
            </CardBody>
          ) : null
        }
      </Card >
      <AddTaskModal  pet={props.pet} widget={props.widget} show={showAddTask} toggle={setShowAddTask} />
    </React.Fragment>
  )
}

export default Widget