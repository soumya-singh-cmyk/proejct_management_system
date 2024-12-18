// import React, { useState } from 'react';
// import axios from 'axios';

// const ProjectUpdate = ({ projectId, currentProgress, currentScore }) => {
//     const [progress, setProgress] = useState(currentProgress);
//     const [score, setScore] = useState(currentScore);

//     const handleUpdate = async () => {
//         try {
//             await axios.patch(`http://localhost:5000/api/projects/${projectId}`, { progress, score });
//             alert('Project updated successfully!');
//         } catch (err) {
//             console.error(err);
//             alert('Failed to update project.');
//         }
//     };

//     return (
//         <div>
//             <h4>Update Project</h4>
//             <label>Progress (%): </label>
//             <input
//                 type="number"
//                 value={progress}
//                 onChange={(e) => setProgress(e.target.value)}
//             />
//             <br />
//             <label>Score: </label>
//             <input
//                 type="number"
//                 value={score}
//                 onChange={(e) => setScore(e.target.value)}
//             />
//             <br />
//             <button onClick={handleUpdate}>Update</button>
//         </div>
//     );
// };

// export default ProjectUpdate;
import React, { useState } from 'react';
import axios from 'axios';

const ProjectUpdate = ({ projectId, currentProgress, currentScore }) => {
    const [progress, setProgress] = useState(currentProgress);
    const [score, setScore] = useState(currentScore);

    const handleUpdate = async () => {
        try {
            const response = await axios.put(`http://localhost:5000/api/projects/${projectId}`, {
                progress,
                score,
            });
            alert('Project updated successfully');
        } catch (err) {
            console.error('Failed to update project:', err);
            alert('Failed to update project');
        }
    };

    return (
        <div>
            <h4>Update Progress & Score</h4>
            <input
                type="number"
                value={progress}
                onChange={(e) => setProgress(e.target.value)}
                placeholder="Progress (0-100)"
            />
            <input
                type="number"
                value={score}
                onChange={(e) => setScore(e.target.value)}
                placeholder="Score"
            />
            <button onClick={handleUpdate}>Update</button>
        </div>
    );
};

export default ProjectUpdate;
