import { Component, OnInit } from '@angular/core';
import { CategoryList } from 'src/app/mocks/category-list.mock';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories:Category[] | undefined;

  constructor() { 
    this.categories = CategoryList;
  }

  ngOnInit(): void {
  }

  onSelect(category:Category){
    
  }

}
