import { Injectable } from '@angular/core';
import { GenericHttpService } from '../../../common/services/generic-http.service';
import { MessageResponseModel } from '../../../common/models/message.response.model';
import { RequestModel } from '../../../common/models/request.model';
import { PaginationResultModel } from '../../../common/models/pagination-result.model';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private _http: GenericHttpService
  ) { }

  add(model:FormData, callBack: (res: MessageResponseModel)=> void){
    this._http.post<MessageResponseModel>("product/add",model,res=>callBack(res));
  }

  update(model:FormData, callBack: (res: MessageResponseModel)=> void){
    this._http.post<MessageResponseModel>("product/update",model,res=>callBack(res));
  }

  getAll(model:RequestModel, callBack: (res: PaginationResultModel<ProductModel[]>)=> void){
    this._http.post<PaginationResultModel<ProductModel[]>>("product/",model,res=>callBack(res));
  }

  removeById(model:any, callBack: (res: MessageResponseModel)=> void){
    this._http.post<MessageResponseModel>("product/removeById",model,res=>callBack(res));
  }

  changeActiveStatus(model:any, callBack: (res: MessageResponseModel)=> void){
    this._http.post<MessageResponseModel>("product/changeActiveStatus",model,res=>callBack(res));
  }

  getById(model:any, callBack: (res: ProductModel)=> void){
    this._http.post<ProductModel>("product/getById",model,res=>callBack(res));
  }

  removeImageByProductIdAndIndex(model:any, callBack: (res: MessageResponseModel)=> void){
    this._http.post<MessageResponseModel>("product/removeImageByProductIdAndIndex",model,res=>callBack(res));
  }


}
