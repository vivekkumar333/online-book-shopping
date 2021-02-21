import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/common/book';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[] = [
    {
      "sku": "text-100",
      "name": "C IN Depth",
      "description": "Concept of C Language",
      "unitPrice": 350,
      "imageUrl": "assests/images/book/boo101.jpg",
      "active": true,
      "unitsInStock": 9,
      "createdOn": new Date(),
      "updatedOn": null
    },

    {
      "sku": "text-101",
      "name": "Let US C",
      "description": "Concept of C Language",
      "unitPrice": 300,
      "imageUrl": "assests/images/book/boo102.jpg",
      "active": true,
      "unitsInStock": 250,
      "createdOn": new Date(),
      "updatedOn": null
    },

    {
      "sku": "text-103",
      "name": "Ramayna",
      "description": "Hindus Oldest Scripture",
      "unitPrice": 1999,
      "imageUrl": "assests/images/book/boo103.jpg",
      "active": true,
      "unitsInStock": 55,
      "createdOn": new Date(),
      "updatedOn": null
    }

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
