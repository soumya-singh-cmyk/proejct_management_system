// // import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import ProjectUpdate from './ProjectUpdate';  // Import the update component

// const ProjectList = () => {
//     const [projects, setProjects] = useState([]);
//     const [editingProject, setEditingProject] = useState(null);

//     useEffect(() => {
//         // Fetch all projects
//         const fetchProjects = async () => {
//             try {
//                 const response = await axios.get('http://localhost:5000/api/projects');
//                 setProjects(response.data);
//             } catch (err) {
//                 console.error('Error fetching projects:', err);
//             }
//         };

//         fetchProjects();
//     }, []);

//     // Function to handle edit action (show project update form)
//     const handleEdit = (project) => {
//         setEditingProject(project);
//     };

//     return (
//         <div>
//             <h2>Projects</h2>
//             {editingProject ? (
//                 // Show the ProjectUpdate form when a project is being edited
//                 <ProjectUpdate
//                     projectId={editingProject._id}
//                     currentProgress={editingProject.progress}
//                     currentScore={editingProject.score}
//                 />
//             ) : (
//                 <ul>
//                     {projects.map((project) => (
//                         <li key={project._id}>
//                             <strong>{project.title}</strong> - {project.description}
//                             <div>
//                                 <p><strong>Progress:</strong> {project.progress}%</p>
//                                 <p><strong>Score:</strong> {project.score}</p>
//                                 <button onClick={() => handleEdit(project)}>Edit</button>
//                             </div>
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// };

// export default ProjectList;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import ProjectUpdate from './ProjectUpdate';  // Import the update component

// const ProjectList = () => {
//     const [projects, setProjects] = useState([]);
//     const [editingProject, setEditingProject] = useState(null);

//     useEffect(() => {
//         // Fetch all projects
//         const fetchProjects = async () => {
//             try {
//                 const response = await axios.get('http://localhost:5000/api/projects');
//                 setProjects(response.data);
//             } catch (err) {
//                 console.error('Error fetching projects:', err);
//             }
//         };

//         fetchProjects();
//     }, []);

//     // Function to handle edit action (show project update form)
//     const handleEdit = (project) => {
//         setEditingProject(project);
//     };

//     return (
//         <div>
//             <h2>Projects</h2>
//             {editingProject ? (
//                 // Show the ProjectUpdate form when a project is being edited
//                 <ProjectUpdate
//                     projectId={editingProject._id}
//                     currentProgress={editingProject.progress}
//                     currentScore={editingProject.score}
//                 />
//             ) : (
//                 <ul>
//                     {projects.map((project) => (
//                         <li key={project._id}>
//                             <strong>{project.title}</strong> - {project.description}
//                             <div>
//                                 <p><strong>Progress:</strong> {project.progress}%</p>
//                                 <p><strong>Score:</strong> {project.score}</p>
//                                 <button onClick={() => handleEdit(project)}>Edit</button>
//                             </div>
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// };

// export default ProjectList;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectUpdate from './ProjectUpdate';  // Import the update component
import './ProjectList.css';

const ProjectList = () => {

    const [projects, setProjects] = useState([]);
    const [editingProject, setEditingProject] = useState(null);

    useEffect(() => {
        // Fetch all projects
        const fetchProjects = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/projects');
                setProjects(response.data);
            } catch (err) {
                console.error('Error fetching projects:', err);
            }
        };

        fetchProjects();
    }, []);

    // Function to handle edit action (show project update form)
    const handleEdit = (project) => {
        setEditingProject(project);
    };

    return (
        <div className="project-list-container">
            <h2>Projects</h2>
            {editingProject ? (
                // Show the ProjectUpdate form when a project is being edited
                <ProjectUpdate
                    projectId={editingProject._id}
                    currentProgress={editingProject.progress}
                    currentScore={editingProject.score}
                />
            ) : (
                <ul className="project-list">
                    {projects.map((project) => (
                        <li key={project._id} className="project-item">
                            <div className="project-header">
                                <strong className="project-title">{project.title}</strong>
                                <span className="project-status">{project.status}</span>
                            </div>
                            <p className="project-description">{project.description}</p>
                            <div className="project-details">
                                <p><strong>Progress:</strong> {project.progress}%</p>
                                <p><strong>Score:</strong> {project.score}</p>
                                <button 
                                    className="edit-button" 
                                    onClick={() => handleEdit(project)}
                                >
                                    Edit
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ProjectList;
