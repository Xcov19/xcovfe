export const ADD_PROJECT = 'ADD_PROJECT';
let _id = 0;
export const addProject = project => ({
    type: ADD_PROJECT,
    project: {
        ...project,
        name: `${project.hospital || 'hospital'} - ${project.template || 'covid-19'}`,
        id: ++_id,
    },
});
