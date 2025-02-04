const user = require("../model/users"); // Correct import
const moment = require("moment"); // Import moment

const controller = {};

controller.findAll= async(req,res)=>{
    try{
        const users= await user.findAll()
        res.send(users)
    }catch(error){
        res.send({message:"Unable retrieve"})
    }
}

controller.Insert = async (req, res) => {
  try {
    const { name } = req.body;

    // Function to generate a unique ID
    const generateUniqueID = () => {
      const keys = "1234567890!@#$%^&*abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let result = "";
      for (let i = 0; i < 5; i++) {
        result += keys.charAt(Math.floor(Math.random() * keys.length));
      }
      return result;
    };

    let unique_id;
    let isUnique = false;

    while (!isUnique) {
      unique_id = generateUniqueID();

      const avail = await user.findAll({ where: { user_id:unique_id } });
      if (avail.length === 0) {
        isUnique = true; 
      }
    }

    await user.create({ user_id: unique_id, name });
    res.json({ message: "Successfully Created", user_id: unique_id });

  } catch (error) {
    console.error("Error inserting user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = controller;
