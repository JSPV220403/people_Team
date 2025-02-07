const {  DataTypes } = require("sequelize");
const {sequelize} = require("./db.js"); // Ensure this points to your Sequelize instance

const User = sequelize.define("users", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id:{
    type: DataTypes.STRING,
  },
  name:{
    type: DataTypes.STRING,
    allowNull:false
  },
  team_id:{
    type:DataTypes.STRING,
    allowNull:true
  },
  joineddate:{
    type:DataTypes.DATE,
    allowNull:true
  },
  leftdate:{
    type:DataTypes.DATE,
    allowNull:true
  }
}, {
  tableName: "users", // Name of your database table
  timestamps: false,
});

sequelize.sync()
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch((err) => {
    console.error('Error syncing database:', err);
  });

module.exports = User;
