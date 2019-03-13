import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faCalendar, faCalendarPlus, faCalendarMinus } from '@fortawesome/free-solid-svg-icons'
import { Card, CardBody, CardHeader, Table, Button } from 'reactstrap'

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
  const data = props.data
  const render = []
  /** Loop data */
  data.forEach(item => {
    render.push(<ItemList key={item.id} buttonDelete={props.buttonDelete ? () => props.buttonDelete(item.id) : null} />)
  })
  return render
}

const Widget = (props) => {
  return (
    <Card style={{ borderRadius: 0 }}>
      <CardHeader tag="h6" className="text-center text-uppercase font-weight-light">{props.title}</CardHeader>
      <CardBody className="p-0" style={{ height: props.buttonAdd ? '250px' : '280px', overflow: 'auto' }}>
        {!props.data ? (
          <p className="text-muted text-center px-3 py-4">Não há agendamentos para {props.title}.</p>
        ) : (
            <Table className="m-0" size="sm" responsive borderless striped hover>
              <tbody>
                <Itens buttonDelete={props.buttonDelete} data={props.data} />
              </tbody>
            </Table>
          )}
      </CardBody >
      {
        props.buttonAdd ? (
          <CardBody className="p-0">
            <Button size="sm" block onClick={props.buttonAdd} style={{ borderRadius: 0 }} className="text-uppercase font-weight-bold">
              <FontAwesomeIcon icon="calendar-plus" /> Adicionar novo
            </Button>
          </CardBody>
        ) : null
      }
    </Card >
  )
}

export default Widget