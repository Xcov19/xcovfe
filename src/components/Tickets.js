import React from 'react';
import StageFilter from "./StageFilter";
import TicketsTableContainer from "../containers/TicketsTableContainer";
import STAGES from '../data/stages';

const Tickets = () => {
  const [stages, setStages] = React.useState([STAGES[0].key]);
  return <div>
    <StageFilter value={stages} onChange={setStages} />
    <TicketsTableContainer stages={stages} />
  </div>
};

export default Tickets;
