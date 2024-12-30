import { Injectable } from '@angular/core';
import { GenericHttpService } from '../../../common/services/generic-http.service';
import { BasketModel } from '../models/basket.model';
import { MessageResponseModel } from '../../../common/models/message.response.model';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  count: number = 0;
  constructor(
    private _http: GenericHttpService
  ) { }

  getAll(callBack: (res: BasketModel[])=> void){
    let userString = localStorage.getItem("user");
    let user = JSON.parse(userString);
    let model = {userId: user._id}
    this._http.post<BasketModel[]>("baskets", model, res=> callBack(res))
  }

  getCount() {
    let userString = localStorage.getItem("user");
    
    // `user` değeri mevcut değilse kontrol
    if (!userString) {
      console.error("User is not logged in or 'user' is missing in localStorage.");
      return;
    }
  
    try {
      let user = JSON.parse(userString);
      if (!user || !user._id) {
        console.error("Invalid user data in localStorage.");
        return;
      }
  
      let model = { userId: user._id };
      this._http.post<any>("baskets/getCount", model, (res) => {
        this.count = res.count; // Başarıyla alınan sonucu sayaca ata
      });
    } catch (error) {
      console.error("Error parsing user data:", error);
    }
  }
  
  add(model: BasketModel, callBack: (res: MessageResponseModel) => void) {
    let userString = localStorage.getItem("user");
    
    // `user` değeri mevcut değilse kontrol
    if (!userString) {
      console.error("User is not logged in or 'user' is missing in localStorage.");
      return;
    }
  
    try {
      let user = JSON.parse(userString);
      if (!user || !user._id) {
        console.error("Invalid user data in localStorage.");
        return;
      }
  
      model.userId = user._id; // Kullanıcı kimliğini modele ekle
      this._http.post<MessageResponseModel>("baskets/add", model, (res) => {
        this.getCount(); // Sepet sayısını güncelle
        callBack(res); // Callback işlevini çağır
      });
    } catch (error) {
      console.error("Error parsing user data:", error);
    }
  }

  removeById(model: any,callBack: (res: MessageResponseModel)=> void){

    this._http.post<MessageResponseModel>("baskets/removeById", model, res=>{
      this.getCount();
      callBack(res);
    });
  }
}
