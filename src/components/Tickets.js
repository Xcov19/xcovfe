import React from 'react';
import StageFilter from "./StageFilter";
import TicketsTableContainer from "../containers/TicketsTableContainer";
import STAGES from '../data/stages';
const STAGE_FILTER_KEY = "STAGES__001";
const toObj = v => v && JSON.parse(v);
const toStr = v => v && JSON.stringify(v);
const getStages = () => toObj(localStorage.getItem(STAGE_FILTER_KEY)) || [STAGES[0].key];
const storeStages = state => localStorage.setItem(STAGE_FILTER_KEY, toStr(state));


const Tickets = () => {
  const [stages, setStages] = React.useState(getStages());
  storeStages(stages);
  return <div>
    <StageFilter value={stages} onChange={setStages} />
    <TicketsTableContainer stages={stages} />
  </div>
};

export default Tickets;
