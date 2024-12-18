const mongoose = require('mongoose');

// // Define the project schema
// const ProjectSchema = new mongoose.Schema({
//     title: { type: String, required: true },
//     description: { type: String, required: true },
//     assignedTo: { type: String },
//     progress: { type: Number, default: 0 }, // Progress in percentage
//     score: { type: Number, default: 0 },
// }, { timestamps: true });

// // Export the Project model
// module.exports = mongoose.model('Project', ProjectSchema);
const ProjectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    assignedTo: { type: String }, // Candidate ID or email
    status: { type: String, enum: ['pending', 'accepted', 'completed'], default: 'pending' },
    progress: { type: Number, default: 0 }, // Progress in percentage
    score: { type: Number, default: 0 }, // Calculated score
}, { timestamps: true });
module.exports = mongoose.model('Project', ProjectSchema);
