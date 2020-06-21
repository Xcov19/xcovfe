const stages = [
  { key: "open_case_suspect", name: "Case Suspect", color: '#4e73df', unactiveColor: '#868fdf' },
  { key: "test_result", name: "Test Result", color: '#1cc88a', unactiveColor: '#6fc894' },
  { key: "admission", name: "Admission", color: '#36b9cc', unactiveColor: '#84cccb' },
  { key: "case_monitoring", name: "Case Monitoring", color: '#f6c23e', unactiveColor: '#f6d596' },
  { key: "case_closed", name: "Case Closed", color: '#e74a3b', unactiveColor: '#e79494' },
];

const stagesMap = stages.reduce((map, stage) => {
  map[stage.key] = stage;
  return map
}, {});

const stageNames = stages.map(({name}) => name);
export { stageNames, stagesMap };
export default stages;
