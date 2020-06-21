import React from 'react';
import DataTable from 'react-data-table-component';
import { stagesMap } from "../data/stages";
import { withRouter } from "react-router";
import { Badge, Col, FormControl, Row } from "react-bootstrap";

const styles = {
  tableStyle: {
    marginTop: -50,
  },
  searchCol: {
    zIndex: 9,
    marginTop: 24,
    paddingRight: 0,
  },
  searchInput: {
    fontSize: 10,
  },
  searchRow: {
    paddingRight: 24,
    paddingLeft: 12,
  },
};

const StageCell = ({ row }) => {
  const stage = stagesMap[row.stage];
  const style = {
    backgroundColor: stage.color,
    color: 'white',
    fontSize: 12,
  };
  return <Badge pill style={style}>
    {stage.name}
  </Badge>
};

const SearchColumn = ({ column, onChange }) => {
  return <Col style={styles.searchCol}>
    <FormControl
      size="sm"
      style={styles.searchInput}
      placeholder={column.name}
      onChange={onChange}
    />
  </Col>
};

const COLUMNS = [
  {
    name: 'Case ID',
    selector: 'caseId',
    sortable: true,
  },
  {
    name: 'Stage',
    selector: 'stage',
    sortable: true,
    cell: row => <StageCell row={row} />,
  },
  {
    name: 'Name',
    selector: 'patientName',
    sortable: true,
  },
  {
    name: 'Severity',
    selector: 'severityAssessmentReport',
    sortable: true,
  },
  {
    name: 'Test status',
    selector: 'testStatus',
    sortable: true,
  },
  {
    name: 'Test result',
    selector: 'testResult',
    sortable: true,
  },
  {
    name: 'District',
    selector: 'district',
    sortable: true,
  },
  {
    name: 'Age',
    selector: 'patientAge',
    sortable: true,
  },
  {
    name: 'Gender',
    selector: 'gender',
    sortable: true,
  },
  {
    name: 'Contact Number',
    selector: 'patientContactNumber',
    sortable: true,
  },
  {
    name: 'On duty doctor',
    selector: 'rmDutyDoctor',
    sortable: true,
  },
  {
    name: 'Created On',  // todo set this value in action creator
    selector: 'createdOn',
    sortable: true,
  },
  {
    name: 'Last Updated',  // todo set this value in action creator
    selector: 'lastUpdated',
    sortable: true,
  },
];

const TicketsTable = ({ history, tickets, stages }) => {
  const openTicket = id => history.push(`/app/project/tickets/${id}`);
  const onRowClicked = ({ id }) => openTicket(id);

  const [searchState, setSearchState] = React.useState({});
  const searchStr = (str= '') => str
    .toLowerCase()
    .split(' ').join('')
    .split('_').join('');
  const stageFilter = ticket => stages.length > 0
    ? stages.map(searchStr).includes(searchStr(ticket.stage))
    : () => true;
  const searchFilter = ticket => Object.keys(searchState).filter(
    key => !ticket[key] || !searchStr(ticket[key]).includes(searchStr(searchState[key]))
  ).length === 0;

  const filteredTickets = tickets
    .filter(stageFilter)
    .filter(searchFilter);

  return <React.Fragment>
    <Row style={styles.searchRow}>
      { COLUMNS.map(column =>
        <SearchColumn
          column={column}
          key={column.selector}
          onChange={e => setSearchState({ ...searchState, [column.selector]: e.target.value })}
        />
      )}
    </Row>
    <DataTable
      style={styles.tableStyle}
      columns={COLUMNS}
      data={filteredTickets}
      onRowClicked={onRowClicked}
      defaultSortField="caseId"
      pagination
      striped
      highlightOnHover
      pointerOnHover
      dense
    />
  </React.Fragment>;
};

export default withRouter(TicketsTable);
