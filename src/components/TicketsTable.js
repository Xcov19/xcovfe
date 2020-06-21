import React from 'react';
import DataTable from 'react-data-table-component';
import { stagesMap } from "../data/stages";
import { withRouter } from "react-router";
import { Badge, Row } from "react-bootstrap";

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

const TicketsTable = ({ history, tickets, stages }) => {
  const openTicket = id => history.push(`/app/project/tickets/${id}`);
  const onRowClicked = ({ id }) => openTicket(id);
  const filteredTickets = tickets.filter(
    ticket => stages.includes(ticket.stage)
  );

  const SearchColumn = props => {
    return <div></div>
  };

  const columns = [
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

  return <React.Fragment>
    <Row>
      { columns.map(column => <SearchColumn column={column} />) }
    </Row>
    <DataTable
      columns={columns}
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
