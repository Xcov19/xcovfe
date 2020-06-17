import React from 'react';
import DataTable from 'react-data-table-component';

import data from '../data';

function Dashboard(props) {

  console.log(props)

  const [selectableRows, setSelectableRows] = React.useState(false);
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

  const columns = [
    {
      name: 'Title',
      selector: 'title',
      sortable: true,
    },
    {
      name: 'Director',
      selector: 'director',
      sortable: true,
    },
    {
      name: 'Year',
      selector: 'year',
      sortable: true,
    },
  ];

  return (
    <React.Fragment>

      <h1 className="h3 mb-4 text-gray-800">Data Table</h1>

      <DataTable
        title="Movie List"
        columns={columns}
        data={data}
        defaultSortField="title"
        selectableRows={selectableRows}
        selectableRowsNoSelectAll={noSelectAll}
        selectableRowsHighlight={selectableRowsHighlight}
        selectableRowsVisibleOnly={selectableRowsVisibleOnly}
        expandableRows={expandableRows}
        expandOnRowClicked={expandOnRowClick}
        pagination={pagination}
        highlightOnHover={highlight}
        striped={striped}
        pointerOnHover={pointer}
        dense={dense}
        noTableHead={tableHead}
        persistTableHead={persist}
        progressPending={loading}
        noHeader={noHeader}
        subHeader={subHeader}
        subHeaderComponent={
          (
            <div style={{ display: 'flex', alignItems: 'center' }}>
            </div>
          )
        }
        subHeaderAlign={subHeaderAlign}
        fixedHeader={fixedHeader}
        fixedHeaderScrollHeight="300px"
        direction={directionValue}
      />

    </React.Fragment>
  );
}

export default Dashboard;
