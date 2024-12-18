// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const App = () => {
//     const [projects, setProjects] = useState([]);
//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState('');

//     // Fetch projects on page load
//     useEffect(() => {
//         axios.get('http://localhost:5000/api/projects')
//             .then((response) => {
//                 setProjects(response.data);
//             })
//             .catch((error) => {
//                 console.error("Error fetching projects:", error);
//             });
//     }, []);

//     // Handle form submission
//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const newProject = { title, description };

//         try {
//             // Make POST request to add a new project
//             await axios.post('http://localhost:5000/api/projects', newProject);
            
//             // Reset input fields
//             setTitle('');
//             setDescription('');
            
//             // Fetch updated projects list
//             const response = await axios.get('http://localhost:5000/api/projects');
//             setProjects(response.data);

//             alert("Project added successfully");
//         } catch (error) {
//             console.error("Error adding project:", error);
//             alert("Failed to add project");
//         }
//     };

//     return (
//         <div>
//             <h1>Projects</h1>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     placeholder="Project Name"
//                     value={title}
//                     onChange={(e) => setTitle(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="text"
//                     placeholder="Description"
//                     value={description}
//                     onChange={(e) => setDescription(e.target.value)}
//                     required
//                 />
//                 <button type="submit">Add Project</button>
//             </form>

//             <h2>Project List</h2>
//             <ul>
//                 {projects.map((project, index) => (
//                     <li key={index}>
//                         <h3>{project.title}</h3>
//                         <p>{project.description}</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default App;
import React from 'react';
import ProjectForm from './components/ProjectForm';
import ProjectList from './components/ProjectList';

const App = () => {
    return (
        <div>
            <h1> IONOTS Project Management</h1>
            <ProjectForm />
            <ProjectList />
        </div>
    );
};

export default App;
