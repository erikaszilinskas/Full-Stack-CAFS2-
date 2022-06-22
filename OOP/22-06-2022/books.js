class Books {
    constructor(name, author, year) {
        this.name = name;
        this.author = author;
        this.year = year;
    }

    sayNameAuthor() {
        return `Book name is ${this.name} and author is ${this.author}`;
    }

    getBookYear() {
        return `The book is ${(new Date().getFullYear()) - this.year} years old`;
    }

};