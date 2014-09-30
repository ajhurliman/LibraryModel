//Written by James Hurliman Sept 2014 for CodeAcademy application
//This is a library model, it has Library, Shelf and Book classes
//It seems like the shelves could be arrays, but the prompt
//wanted a constructor to make the shelves

var _ = require('lodash');

//books
var oldMan = new Book("Old Man and the Sea", "Ernest Hemingway", 0684801221);
var grapes = new Book("The Grapes of Wrath", "John Steinbeck", 0241952476);
var diamondAge = new Book("The Diamond Age", "Neal Stephenson", 0324249248);

//shelves
var shelf0 = new Shelf();
var shelf1 = new Shelf();

//libraries
var myLibrary = new Library([shelf0, shelf1], "123 Fake Street");

function Library(shelves, address) {
	this.shelves = shelves; //shelves is an array
	this.address = address;
	this.getAllBooks = function() {
		console.log("Here are all the books in the library: ");
		for (var i = 0; i < this.shelves.length; i++) {
			console.log("Shelf number " + i + ": ");
			for (var j = 0; j < this.shelves[i].contents.length; j++) {
				console.log(this.shelves[i].contents[j].name);
			}
		}
	}
}

function Shelf() {
	this.contents = [];
}

function Book(name, author, isbn) {
	this.name = name;
	this.author = author;
	this.isbn = isbn;
	this.location = null;
	this.enshelf = function(newLocation) {
		this.location = newLocation;
		newLocation.contents.push(this);
	}
	this.unshelf = function() {
		this.location.contents = _.without(this.location.contents, this);
		this.location = null;
	}
}


console.log("Welcome to Digital Library 0.1!");
oldMan.enshelf(shelf0);
diamondAge.enshelf(shelf0);
grapes.enshelf(shelf1);
myLibrary.getAllBooks();


