import { connect } from 'react-redux';
import CreateProject from "../components/CreateProject";
import { addProject } from "../actions/projects";

const mapStateToProps = (state) => ({
  projects: state.projects || [],
});

const mapDispatchToProps = (dispatch) => ({
  addProject: (...args) => dispatch(addProject(...args)),
});

const CreateProjectContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProject);

export default CreateProjectContainer;
