import { ADD_PROJECT } from "../actions/projects";

const toObj = v => v && JSON.parse(v);
const toStr = v => v && JSON.stringify(v);
const PROJECTS_KEY = 'projects__00001';
const getProjects = () => toObj(localStorage.getItem(PROJECTS_KEY)) || [];
const setProjects = state => console.log(state) || localStorage.setItem(PROJECTS_KEY, toStr(state)) || state;

const projects = (state = getProjects(), action) => {
    console.log("ACTION", state, action);
    const addAction = (action) => [...state, {...action.project }];

    switch (action.type) {
        case ADD_PROJECT: return addAction(action);
        default: return state
    }
};

export default (state, action) => setProjects(projects(state, action));
