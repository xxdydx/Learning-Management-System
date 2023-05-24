import { Model, DataTypes } from "sequelize";

import { sequelize } from "../utils/db";

class File extends Model {
  public id!: number;
  public name!: string;
  public link!: string;
  public awskey!: string;
  public sectionId!: number;
}

File.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    link: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    awskey: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: "file",
  }
);

export default File;
