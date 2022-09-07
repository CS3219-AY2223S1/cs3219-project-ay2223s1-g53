# CS3219-AY22-23-Project-Skeleton

This is a template repository for CS3219 project.

## User Service
1. Rename `.env.sample` file to `.env`.
2. start up local mongoDB service with `brew services start mongodb-community@6.0` on a Mac.
3. Change the `DB_LOCAL_URI` in `.env` file to `mongodb://localhost:27017/${any_db_name_you_want}`.
4. Change `ENV` in the `.env` file to `LOCAL`.
5. Install yarn packages using `yarn install`.
6. Run User Service using `yarn start`, or `yarn start:dev` if you want to watch for code changes.

## Frontend
1. Install packages using `yarn install`.
2. Run Frontend using `yarn start`.
