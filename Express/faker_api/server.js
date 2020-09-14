const express = require("express");
const app = express();

app.use(express.json());
app.use( express.urlencoded({ extended: true }) );

const faker = require("faker");
const port = 8000;

// class User {
//     constructor() {
//         this.firstName = faker.name.firstName();
//         this.lastName = faker.name.lastName();
//         this.gender = faker.name.gender();
//     }
// }

// class Company {
//     constructor() {
//         this.companyName = faker.company.companyName();
//         this.catchPhrase = faker.company.catchPhrase();
//         this.bsAdjective = faker.company.bsAdjective();
//     }
// }

// app.get("/api", (req, res) => {
//     res.json({message: "Hello World"});
// });

// app.get("/api/users/new", (req, res) => {
//     res.json(new User());
// })

// app.get("/api/companies/new", (req, res) => {
//     res.json(new Company());
// })

require('./config/routes')(app);

app.listen( 8001, () => console.log(`Listening on port: ${8001}`) );