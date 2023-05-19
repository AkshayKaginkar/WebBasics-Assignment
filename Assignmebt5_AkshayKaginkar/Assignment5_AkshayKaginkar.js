/*

Implement Book class having instance variables to hold book id, book name, book author, book price.
Class must have paramaterized constructor and a method which returns all book details (return all variables values using  ${})
All instance variables must be private. and Provide public get set properties in class to access instance variables outside.

Create 5 Book objects and store in one book array

Implement following using forEach, find, filter, map, reduce
1. Iterate Book array using forEach
2. Find all books having price less than 500
3. Find first book having price greater than 600
4. Find all Java related books
5. Make sum of all Book Prices
6. Store Book Author of every book in seperate array
7. Display Books having Author name starting with M/m
*/

class Book {
    constructor(id, name, author, price) {
        this._id = id;
        this._name = name;
        this._author = author;
        this._price = price;
    }

    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get author() {
        return this._author;
    }

    set author(author) {
        this._author = author;
    }

    get price() {
        return this._price;
    }

    set price(price) {
        this._price = price;
    }

    getDetails() {
        return `Book ID: ${this._id}\nBook Name: ${this._name}\nBook Author: ${this._author}\nBook Price: $${this._price}`;
    }
}

const books = [
    new Book(1, "java1", "Atul", 450.0),
    new Book(2, "Book2", "Akshay", 550.0),
    new Book(3, "java2", "Sameer", 650.0),
    new Book(4, "Book4", "Jayesh", 400.0),
    new Book(5, "Book5", "Mahesh", 3000.0),
];

// 1. Iterate Book array using forEach
console.log("Iterate Book array using forEach")
books.forEach((book) => {
    console.log(book.getDetails());
});

// 2. Find all books having price less than 500
console.log("Find all books having price less than 500:");
const below500 = books.filter((book) => book.price < 500);
below500.forEach((book) => {
    console.log(book.getDetails());
    console.log();
});

// 3. Find first book having price greater than 600
console.log("Find first book having price greater than 600:");
const above600 = books.find((book) => book.price > 600);
console.log(above600.getDetails());
console.log();

// 4. Find all Java related books
console.log("Find all Java related books:");
const javaBooks = books.filter((book) =>
    book.name.toLowerCase().includes("java")

);
javaBooks.forEach((book) => {
    console.log(book.getDetails());
    console.log();
});

// 5. Make sum of all Book Prices
const totalPrice = books.reduce((sum, book) => sum + book.price,0);
console.log("Sum of all book prices: $" + totalPrice);

// 6. Store Book Author of every book in separate array
const authors = books.map((book) => book.author);
console.log("Book authors :", authors);

// 7. Display Books having Author name starting with M/m
console.log("Display Books having Author name starting with M/m:");
const booksWithAuthorStartingWithM = books.filter((book) =>
    book.author.toLowerCase().startsWith("m")
);
booksWithAuthorStartingWithM.forEach((book) => {
    console.log(book.getDetails());
    console.log();
});
