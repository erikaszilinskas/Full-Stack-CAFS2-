class Movies {
    constructor(name, year, director, budget, income) {
        this.name = name;
        this.year = year;
        this.director = director;
        this.budget = budget;
        this.income = income;
    }

    getIntroduction() {
        return `Movie introduction: ${this.name}  was realeased in ${this.year} and the director is ${this.director}`;
    }

    getProfit() {
        return `The profit was: $${this.income - this.budget} milion dollars`;
    }
}