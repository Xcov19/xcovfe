import React from 'react';
import {Col, Row} from "react-bootstrap";
import stages from "../data/stages";

const styles = {
  stageFilter: {
    maxWidth: "100%",
    overflowX: "hidden",
  },
  stageWrapper: {
    marginRight: -24,
  },
  createStageStyle(color, active) { return {
    height: 40,
    maxWidth: '100%',
    display: 'flex',
    textAlign: 'center',
    backgroundColor: color,
    color: 'white',
    fontWeight: active ? 700 : 300,
    paddingLeft: 30,
  }},
  createArrowStyle(color) { return {
    zIndex: 3,
    borderColor: 'inherit',
    borderLeft: '20px solid',
    borderLeftColor: color,
    borderTop: '20px solid transparent',
    borderBottom: '20px solid transparent',
    height: 0,
    width: 0,
    marginLeft: 'auto',
    marginRight: -19,
    backgroundColor: 'unset',
  }},
};

const Stage = ({ stage, onToggle, value }) => {
  const color = value
    ? stage.color
    : stage.unactiveColor;
  return <Col style={styles.stageWrapper} onClick={onToggle}>
    <div style={styles.createStageStyle(color, value)}>
        <span style={{ margin: 'auto' }}>
          {stage.name}
        </span>
      <div style={styles.createArrowStyle(color)}/>
    </div>
  </Col>
};

const StageFilter = ({ onChange, value }) => {
  const toggleStage = stage => {
    if (value.includes(stage.key)) {
      onChange(value.filter(v => v !== stage.key))
    } else {
      onChange([...value, stage.key])
    }
  };
  return <Row style={styles.stageFilter}>
    { stages.map((stage, index) =>
      <Stage
        stage={stage}
        value={value.includes(stage.key)}
        onToggle={() => toggleStage(stage)}
        key={index}
      />
    )}
  </Row>;
};

export default StageFilter;
