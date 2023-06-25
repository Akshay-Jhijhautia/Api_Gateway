"use strict";
module.exports = (sequelize, DataTypes) => {
  const User_Role = sequelize.define(
    "User_Role",
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      role_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {}
  );
  User_Role.associate = function (models) {
    // associations can be defined here
  };
  return User_Role;
};
