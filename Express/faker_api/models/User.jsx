class User {
    constructor() {
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.gender = faker.name.gender();
    }
}

module.exports = User;