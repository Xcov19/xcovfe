import React from 'react';
import DataTable from 'react-data-table-component';
import STAGES, { stagesMap } from "../data/stages";
import { withRouter } from "react-router";

const StageCell = ({ row }) => {
  const stageName = stagesMap[row.stage].name;
  return <div>{stageName}</div>;
};


const TicketsTable = ({ history, tickets, stages }) => {
  const openTicket = id => history.push(`/app/project/tickets/${id}`);
  const handleButtonClick = (row) => {
    openTicket(row.id)
  };

  const filterTickets = (tickets, stages) => tickets.filter(
    ticket => stages.includes(ticket.stage)
  );

  const columns = [
    {
      cell: (row) => <button onClick={() => { handleButtonClick(row) }}>View</button>,
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
      cell: row => <StageCell row={row} />,
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

  const conditionalRowStyles = STAGES.map(stage => ({
    when: row => row.stage === stage.key,
    style: {
      backgroundColor: stage.color,
      color: 'white'
    }
  }));
  return <DataTable
        columns={columns}
        data={filterTickets(tickets, stages)}
        defaultSortField="name"
        conditionalRowStyles={conditionalRowStyles}
        pagination
      />;
};

export default withRouter(TicketsTable);
