import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

import data from './data';
import DataTable from 'react-data-table-component';


function Dashboard() {

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
      <div id="wrapper">

        <Sidebar />

        <div id="content-wrapper" className="d-flex flex-column">

          <div id="content">

            <Navbar />

            <div className="container-fluid">

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

            </div>

          </div>

          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright &copy; 2020</span>
              </div>
            </div>
          </footer>

        </div>

      </div>

      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>

      <div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
              <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
            <div className="modal-footer">
              <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
              <a className="btn btn-primary" href="login.html">Logout</a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Dashboard;
