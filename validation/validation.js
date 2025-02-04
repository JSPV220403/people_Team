const Joi = require('joi');

// Team Validation
const validateTeam = () => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    description: Joi.string().max(255).optional(),
    members: Joi.array().items(Joi.number().integer().required()).optional(), // Array of member IDs (integers)
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
};
