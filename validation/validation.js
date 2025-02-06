const Joi = require('joi');

// Team Validation
const validateTeam = () => {
  const schema = Joi.object({
    team_name: Joi.string().min(3).max(50).required(),
    members: Joi.array().items(Joi.string()).required(), // Array of member IDs (as strings)
    team_description: Joi.string().min(3).max(500).required(),
  });
  return schema;
};

const validateTeamUpdate = () => {
  const schema = Joi.object({
    team_id: Joi.string().min(3).max(50).required(),
    team_name: Joi.string().min(3).max(50).required(),
    members: Joi.array().items(Joi.string()).required(), // Array of member IDs (as strings)
    team_description: Joi.string().min(3).max(500).required(),
  });
  return schema;
};

// Invitation Validation
const validateUser = () => {
  const schema = Joi.object({
   name:Joi.string().min(3).max(50).required(),
  });
  return schema;
};


// Exporting the validation functions
module.exports = {
  validateTeam,
  validateUser,
  validateTeamUpdate,
};
