import React from 'react';
import DataTable from 'react-data-table-component';

function Tickets(props) {
  const [selectableRows, setSelectableRows] = React.useState(true);
  const [noSelectAll, setNoSelectAll] = React.useState(false);
  const [selectableRowsVisibleOnly, setSelectableRowsVisibleOnly] = React.useState(false);
  const [selectableRowsHighlight, setSelectableRowsHighlight] = React.useState(false);
  const [expandableRows, setExpandableRows] = React.useState(false);
  const [expandOnRowClick, setExpandOnRowClick] = React.useState(false);
  const [pagination, setPagination] = React.useState(true);
  const [highlight, setHighlight] = React.useState(false);
  const [striped, setStriped] = React.useState(false);
  const [pointer, setPointer] = React.useState(false);
  const [dense, setDense] = React.useState(false);
  const [persist, setPersist] = React.useState(false);
  const [tableHead, setNoHead] = React.useState(false);
  const [noContextMenu, setNoContextMenu] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [noHeader, setNoHeader] = React.useState(false);
  const [subHeader, setSubHeader] = React.useState(false);
  const [subHeaderAlign, setSubHeaderAlign] = React.useState('right');
  const [fixedHeader, setFixedheader] = React.useState(false);
  const [direction, setDirection] = React.useState(false);
  const [directionValue, setDirectionValue] = React.useState('auto');


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

  const columns = [
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
