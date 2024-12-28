import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../common/shared/shared.module';
import { CategoryModel } from '../categories/models/category.model';
import { CategoryService } from '../categories/services/category.service';
import { RequestModel } from '../../common/models/request.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  categories: CategoryModel[] = [];
  request: RequestModel = new RequestModel();

  constructor(
    private _category: CategoryService
  ) { }
  ngOnInit(): void {
    this.getCategories();
  }

  getAll(){
    
  }

  getCategories() {
    this._category.getAll(res => this.categories = res)
  }

  changeCategory(categoryName: string){
    this.request.categoryName = categoryName
  }
}

