import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../modules/connection_postgresql';
import { fileURLToPath } from 'url';
import "dotenv";
import fs from 'fs';
import path from 'path';
import {UserSchema} from "./user.model";
import {LevelSchema} from "./level.model";
import {WordSchema} from "./word.model";
import {TopicSchema} from "./topic.model";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const basename = path.basename(__filename);
const db: any = {};

// fs
//   .readdirSync(__dirname)
//   .filter((file) =>  (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-9) === '.model.ts'))
//   .forEach((file) => {
//       console.log('READ', path.join(__dirname, file))
//       import model from (path.join(__dirname, file))(sequelize, DataTypes);
//       console.log('model', model)
//     db[model.name] = model;
//   });


export const User = UserSchema(sequelize);
export const Level = LevelSchema(sequelize);
export const Topic = TopicSchema(sequelize);
export const Word = WordSchema(sequelize);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// foreign keys
// db.Listing.belongsTo(db.Category, { foreignKey: 'categoryUUID', targetKey: 'uuid' });
// db.Listing.belongsTo(db.SubCategory, { foreignKey: 'subCategoryUUID', targetKey: 'uuid' });
// db.Listing.belongsTo(db.SubSubCategory, { foreignKey: 'subSubCategoryUUID', targetKey: 'uuid' });
// db.Listing.belongsTo(db.Size, { foreignKey: 'sizeUUID', targetKey: 'uuid' });
// db.Listing.belongsTo(db.Color, { foreignKey: 'colorUUID', targetKey: 'uuid' });
// db.Listing.belongsTo(db.Brand, { foreignKey: 'brandUUID', targetKey: 'uuid' });
// db.Listing.hasMany(db.Like, { foreignKey: 'listingUUID', sourceKey: 'uuid' });
// db.Like.belongsTo(db.Listing, { foreignKey: 'listingUUID', targetKey: 'uuid' });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
