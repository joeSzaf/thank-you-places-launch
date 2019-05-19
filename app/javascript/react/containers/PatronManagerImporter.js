import React, { Component } from 'react'
import ReactTable from "react-table"
import "react-table/react-table.css"
import NewEventModal from '../containers/NewEventModal'

import moment from 'moment'
import matchSorter from 'match-sorter'

class PatronManagerImporter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected_date: moment(),
      patron_manager_event_data: [],
      patron_manager_venue_data: [],
      newEventName: "",
      newEventDate: "",
      pmLocation: "",
      selectedEventData: {},
      show: false
    }
    this.showModal = this.showModal.bind(this)
    this.hideModal = this.hideModal.bind(this)
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  componentDidMount() {
    fetch('/api/v1/pmevents')
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        let data = []

        body.events.forEach(event => {
          event.instances.forEach(instance => {
            let venue_info = body.venues[instance.venueId]
            data.push({
              name: instance.eventName,
              venue: venue_info,
              date: moment(instance.formattedDates.ISO8601).format('MM-DD-YY @ hh:mm a')
            })
          })
        })
        this.setState({
          data: data
        })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  render(){

    let modal = ""

    if (this.state.show) {
      modal =
          <NewEventModal
            show={this.state.show}
            handleClose={this.hideModal}
            name={this.state.newEventName}
            date={this.state.newEventDate}
            location={this.state.pmLocation}
          />
      } else {
        modal = ""
      }

    const columns = [
    {
      Header: 'Name',
      accessor: 'name',
      filterMethod: (filter, rows) =>
        matchSorter(rows, filter.value, { keys: ["name"] }),
      filterAll: true,
      selected: {}
    },
    {
      Header: 'Venue',
      id: "venue_name",
      accessor: 'venue.name',
      filterMethod: (filter, rows) =>
        matchSorter(rows, filter.value, { keys: ["venue_name"] }),
      filterAll: true
    },
    {
      Header: 'Date',
      id: 'date',
      accessor: 'date',
      filterMethod: (filter, rows) =>
        matchSorter(rows, filter.value, { keys: ["date"] }),
      filterAll: true
    }
  ]
    return(
      <div className="content-container">
        <h1 className="title-h1">Add a new event from PatronManager</h1>
        <p>Please look for the event you want to create a new event from. This will open up a model to submit the new event.</p>
        <ReactTable
          data={this.state.data}
          filterable
          defaultFilterMethod={(filter, row) =>
            String(row[filter.id]) === filter.value}
          columns={columns}
          defaultPageSize = {10}
          pageSizeOptions = {[5, 10, 20]}
          getTrProps={(state, rowInfo) => {
            if (rowInfo && rowInfo.row) {
              return {
                onClick: (e) => {
                  this.setState({
                    newEventName: rowInfo.original.name,
                    newEventDate: rowInfo.original.date,
                    pmLocation: rowInfo.original.venue.name
                  })
                  this.showModal()
                },
                style: {
                  background: rowInfo.index === this.state.selected ? '#00afec' : 'white',
                  color: rowInfo.index === this.state.selected ? 'white' : 'black'
                }
                }
            } else {
              return {}
            }
          }
          }
        />

      {modal}

      </div>
    )
  }
}

export default PatronManagerImporter
