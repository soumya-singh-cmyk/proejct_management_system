// // const express = require('express');
// // const router = express.Router();
// // const { getProjects, createProject } = require('../controllers/projectController');

// // // Routes
// // router.get('/', getProjects);
// // router.post('/', createProject);

// // module.exports = router;
// const express = require('express');
// const router = express.Router();
// const { 
//     getProjects, 
//     createProject, 
//     getAssignedProjects, 
//     updateProjectStatus, 
//     updateProjectProgress 
// } = require('../controllers/projectController');

// // Routes
// router.get('/', getProjects); // Fetch all projects
// router.post('/', createProject); // Create a new project

// // Fetch projects assigned to a specific candidate
// router.get('/assigned/:candidateId', getAssignedProjects);

// // Update project status (accept/reject)
// router.patch('/:id/status', updateProjectStatus);

// // Update project progress and calculate score
// router.patch('/:id/progress', updateProjectProgress);

// module.exports = router;

const express = require('express');
const router = express.Router();
const { getProjects, createProject, updateProject } = require('../controllers/projectController');

// Routes
router.get('/', getProjects);
router.post('/', createProject);
router.put('/:id', updateProject);  // Add this route for updating a project

module.exports = router;
