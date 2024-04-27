import { Sequelize } from 'sequelize';

import db from '../config/database.js';

const { DataTypes } = Sequelize; //DataType fungsi dari sequelize
const User = db.define(
  'users',
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING,

    absen_masuk: {
      type: Sequelize.DATE,
    },
  },

  {
    createdAt: false,
    updatedAt: false,
    timestamps: false,
    freezeTableName: true,
  }
);

export default User;

(async () => {
  await db.sync();
})();
