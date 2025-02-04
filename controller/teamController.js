const user = require("../model/users");
const team = require("../model/teams");
const { where } = require("sequelize");

const controller = {};

controller.getAllTeams = async (req, res) => {
  try {
    const teams = await team.findAll();
    res.send(teams);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};


controller.createTeam = async (req, res) => {
  try {
    const { team_name, members = [], team_description } = req.body;

    const newTeam = await team.create({
      team_name,
      team_description,
      team_count: members.length,
      createddate: new Date(),
    });

    
    newTeam.team_id = team_name + newTeam.id;
    await newTeam.save(); 

    // Assign members to the team
    for (const userId of members) {
      const userData = await user.findOne({ where: { user_id: userId } });
      if (userData) {
        userData.team_id=newTeam.team_id;
        userData.joineddate = new Date();
        await userData.save();
      }
    }

    res.status(200).json({ message: "Team created and members assigned successfully!" });

  } catch (error) {
    console.error("Error inserting team:", error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

controller.Delete= async (req,res)=>{
  const {user_id}= req.query;
  const data= await user.findOne({where: { user_id: user_id}});
  if(data==null){
      res.send({message:"User Id not presents"})
  }
  data.leftdate= new Date()
  data.save()
  res.send({message:"Deleted Successfully"})
}

module.exports = controller;
