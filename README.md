# Background
Coding interview questions have become the standard for companies to gauge the standard of potential employees and interns. As such, more than ever there is a need for platforms to offer coding practice. Platforms like LeetCode may offer relevant questions, but our application distinguishes itself with these features:
1. Collaborative coding space
2. Chat to practice communicating ideas clearly
Many new users of platforms like LeetCode are intimidated by the questions and may not know where to begin. If they get stuck, they may feel alone and discouraged. They also are not able to communicate their thought process and where they are confused to anyone.
Our collaborative approach to coding is more akin to real job contexts, as no employee is in a vacuum. It encourages good communication, which is a very important trait of a skilled engineer. It also brings an aspect of “fun” to the interview preparation process, which can be an important motivating factor.
## Application Start-Up
1. Open 5 separate terminal windows. For steps 2-6, conduct each in a new terminal window.
2. `cd matching-service && npm install && npm start`
3. `cd question-service && npm install && npm start`
4. 
a) cd user-service  
b) Make a copy of `.env.sample` file and rename it to `.env`  
c) Start up local mongoDB service in the background with `brew services start mongodb-community@6.0` on a Mac or whatever method is needed for non-mac OSes to get a mongoDB instance running  
d) Uncomment and change the `DB_LOCAL_URI` in the `.env` file to `mongodb://localhost:27017/${any_db_name_you_want}`  
e) Change `SECRET_KEY` to any string  
f) `yarn install && yarn start`  
5. `cd chat-service && yarn install && yarn start`  
6. `cd frontend && yarn install && yarn start`  
7. Navigate to `localhost:3000` on 2 different browsers to simulate 2 different sessions.
