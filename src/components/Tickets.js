import React from 'react';
import DataTable from 'react-data-table-component';

function Tickets(props) {
  const [selectableRows, setSelectableRows] = React.useState(true);

  const StageTitle = ({ row }) => {
    if (row.stage === 'open_case_suspect') {
      return (
        <div>
          Open Case Suspect
        </div>
      )
    }
    if (row.stage === 'test_result') {
      return (
        <div>
          Test Result
        </div>
      )
    }
    if (row.stage === 'admission') {
      return (
        <div>
          Admission
        </div>
      )
    }
    if (row.stage === 'case_monitoring') {
      return (
        <div>
          Case Monitoring
        </div>
      )
    }
    if (row.stage === 'case_closed') {
      return (
        <div>
          Case Closed
        </div>
      )
    }
  };

  const handleButtonClick = (row) => {
    props.openTicket(row.id)
  };

  const columns = [
    {
      
      cell: (row) => <button onClick={() => {handleButtonClick(row)}}>View</button>,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
    {
      name: 'Name',
      selector: 'name',
      sortable: true,
    },
    {
      name: 'Stage',
      selector: 'stage',
      sortable: true,
      cell: row => <StageTitle row={row} />,
    },
    {
      name: 'Contacts and Organisation',
      selector: 'organisation',
      sortable: true,
    },
    {
      name: 'Notes',
      selector: 'notes',
      sortable: true,
    },
    {
      name: 'Assign To',
      selector: 'assign',
      sortable: true,
    },
  ];

  const conditionalRowStyles = [
    {
      when: row => row.stage === 'open_case_suspect',
      style: {
        backgroundColor: '#4e73df',
        color: 'white'
      }
    },
    {
      when: row => row.stage === 'test_result',
      style: {
        backgroundColor: '#1cc88a',
        color: 'white'
      }
    },
    {
      when: row => row.stage === 'admission',
      style: {
        backgroundColor: '#36b9cc',
        color: 'white'
      }
    },
    {
      when: row => row.stage === 'case_monitoring',
      style: {
        backgroundColor: '#f6c23e',
        color: 'white'
      }
    },
    {
      when: row => row.stage === 'case_closed',
      style: {
        backgroundColor: '#e74a3b',
        color: 'white'
      }
    }
  ];

  const { tickets } = props;

  return (
    <React.Fragment>
      <DataTable
        title={props.title}
        columns={columns}
        data={tickets}
        defaultSortField="name"
        selectableRows={selectableRows}
        conditionalRowStyles={conditionalRowStyles}
        pagination
      />

    </React.Fragment>
  );
}

export default Tickets;
