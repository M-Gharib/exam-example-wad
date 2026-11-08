# WAD Exam – Cinema Screenings

A small Vue 3 + Node.js (Express) + PostgreSQL application that manages cinema screenings.

## Pre-requisites
```
Node.js & NPM, PostgreSQL
```

## Clone the repository
```
git clone <repo-url>
```

## Navigate to the project directory
```
cd <project name>
```

## Project setup
```
npm install
```

### Database info
Complete the information related to your database (db name, password) in the `database.js` file that is in the `server` directory.

The table `screenings` and 8 records are created automatically the first time the back-end is started.

### Run the Back-end (http://localhost:3000)
```
npm run server
```

### Run the Front-End with hot reload (http://localhost:8080)
```
npm run serve
```

## Project structure
```
server/
  database.js            DB connection + table creation + initial records
  server.js              Express back-end (REST API)        <- Tasks 9-12
src/
  App.vue                navigation bar + <router-view>
  router/index.js        two routes: "/" and "/screeningmanagement"
  views/
    AllScreenings.vue        home page                      <- Tasks 1-4
    ScreeningManagement.vue  management page                <- Tasks 5-8
```



**Do not forget to push your changes when you are done.**

**Do not make any changes to your repo after the end of the exam.**

If we observe **suspicious behavior** (all commits at the end of the exam, a non-realistic timeline, too many similarities between projects, etc.) the student involved will be called for an interview.
