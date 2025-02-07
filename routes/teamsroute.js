const express = require("express");
const validate= require("../validation/validation")
const validation= require("../middleware/validation.middleware")
const router = express.Router();

const teamController = require("../controller/teamController");


router.get("/", teamController.getAllTeams);
router.post("/delete",teamController.Delete)
router.post("/create",validation.validateBody(validate.validateTeam()),teamController.createTeam);
router.post("/addmembers",teamController.addMembers);
router.post("/updateteam",validation.validateBody(validate.validateTeamUpdate()),teamController.Update);
router.post("/teamdelete",teamController.teamDelete);

module.exports = router;
