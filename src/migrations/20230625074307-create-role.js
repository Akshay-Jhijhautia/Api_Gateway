"use strict";

const { Enums } = require("../utils/common");
const { ADMIN, CUSTOMER, FLIGHT_COMPANY } = Enums.USER_ROLES_ENUMS;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Roles", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.ENUM,
        values: [ADMIN, CUSTOMER, FLIGHT_COMPANY],
        defaultValue: CUSTOMER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Roles");
  },
};
