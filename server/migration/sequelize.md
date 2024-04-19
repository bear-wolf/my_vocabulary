# migration

-- create
> npx sequelize-cli model:generate --name UserModel --attributes firstName:string,lastName:string,email:string

-- running
> npx sequelize-cli db:migrate

-- undo
> npx sequelize-cli db:migrate:undo

-- initialization seed
> npx sequelize-cli seed:generate --name user

-- run seed
> npx sequelize db:seed:all

