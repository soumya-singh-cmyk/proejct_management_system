// // import React, { useState } from 'react';
// import axios from 'axios';
// import './ProjectForm.css'; // Import the CSS

// const ProjectForm = () => {
//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.post('http://localhost:5000/api/projects', { title, description });
//             setTitle('');
//             setDescription('');
//             alert('Project added successfully!');
//         } catch (err) {
//             console.error(err);
//             alert('Failed to add project');
//         }
//     };

//     return (
//         <div className="project-form-container">
//             <h2>Add New Project</h2>
//             <form onSubmit={handleSubmit} className="project-form">
//                 <input
//                     type="text"
//                     placeholder="Project Title"
//                     value={title}
//                     onChange={(e) => setTitle(e.target.value)}
//                     required
//                 />
//                 <textarea
//                     placeholder="Description"
//                     value={description}
//                     onChange={(e) => setDescription(e.target.value)}
//                     required
//                 ></textarea>
//                 <button type="submit">Add Project</button>
//             </form>
//         </div>
//     );
// };

// export default ProjectForm;
import React, { useState } from 'react';
import axios from 'axios';
import './ProjectForm.css'; // Import the CSS

const ProjectForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/projects', { title, description });
            setTitle('');
            setDescription('');
            alert('Project added successfully!');
        } catch (err) {
            console.error(err);
            alert('Failed to add project');
        }
    };

    return (
        <div className="project-form-container">
            <h2>Add New Project</h2>
            <form onSubmit={handleSubmit} className="project-form">
                <input
                    type="text"
                    placeholder="Project Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                ></textarea>
                <button type="submit">Add Project</button>
            </form>
        </div>
    );
};

export default ProjectForm;
