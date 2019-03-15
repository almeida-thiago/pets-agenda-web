import React, { useState, useEffect } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faCalendar, faCalendarPlus, faCalendarMinus } from '@fortawesome/free-solid-svg-icons'
import { Card, CardBody, CardHeader, Table, Button } from 'reactstrap'

/** Controlers */
import { listTask, deleteTask } from '../controllers/crud-task'

/** Components */
import AddTaskModal from './add-task'

library.add([faChevronRight, faCalendar, faCalendarPlus, faCalendarMinus]) // Add icon to use

/** Itens of list */
const ItemList = (props) => (
  <tr>
    <td className="w-75"><small><FontAwesomeIcon icon="calendar" /> {props.date}</small><br /><FontAwesomeIcon icon="chevron-right" /> {props.description}</td>
    {props.buttonDelete ? ( // If has an option to delete
      <td className="text-right">
        <Button onClick={props.buttonDelete} color="link" size="sm" style={{ borderRadius: 0, color: '#dc3545' }} className="rounded-circle">
          <FontAwesomeIcon icon="calendar-minus" />
        </Button>
      </td>
    ) : null}
  </tr>
)

/** List Itens */
const Itens = async (pet, widget, setUpdateList) => {
  const data = await listTask(pet, widget)
  /** Return message if empty data */
  const render = []
  if (!data.length) return (<React.Fragment key="1"><tr></tr><tr><td className="text-muted text-center px-3 py-4">Não há agendamentos.</td></tr></React.Fragment>)
  /** Loop data */
  data.forEach(item => {
    let date = new Date(item.date)
    date = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} às ${date.getHours()}:${date.getMinutes()}`
    render.push(<ItemList key={item._id} date={date} description={item.description} buttonDelete={widget !== 'today' ? () => { deleteTask(item._id); setUpdateList(true) } : null} />)
  })
  return render
}

const Widget = (props) => {
  /** Modals */
  const [showAddTask, setShowAddTask] = useState(false) // Create food tasks
  const [listTasks, setListTasks] = useState([]) // Taks list
  const [updateList, setUpdateList] = useState(true) // List update

  /** Side effects */
  useEffect(() => {
    if (updateList) Itens(props.pet, props.widget, setUpdateList).then(
      data => {
        setListTasks(data)
      }
    )
    setUpdateList(false)
  })

  return (
    <React.Fragment>
      <Card style={{ borderRadius: 0 }}>
        <CardHeader tag="h6" className="text-center text-uppercase font-weight-light">{props.title}</CardHeader>
        <CardBody className="p-0" style={{ height: !props.noButton ? '250px' : '280px', overflow: 'auto' }}>
          <Table className="m-0" size="sm" responsive borderless striped hover>
            <tbody>
              {listTasks}
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
      <AddTaskModal pet={props.pet} widget={props.widget} show={showAddTask} toggle={setShowAddTask} update={setUpdateList} />
    </React.Fragment>
  )
}

export default Widget