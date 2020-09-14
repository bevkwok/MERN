class Company {
    constructor() {
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.bsAdjective = faker.company.bsAdjective();
    }
}

module.exports = Company;