import { Component, OnInit } from '@angular/core';
import { BasketModel } from '../../models/basket.model';
import { SharedModule } from '../../../../common/shared/shared.module';
import { BasketService } from '../../service/basket.service';
import { ToastrService } from 'ngx-toastr';
import { SwalService } from '../../../../common/services/swal.service';

@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.css'
})
export class BasketComponent implements OnInit{
  baskets: BasketModel[] =[];
  sum: number = 0;

  constructor(
    private _basket: BasketService,
    private _toastr: ToastrService,
    private _swal: SwalService
  ){}
  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this._basket.getAll(res=> {
      this.baskets = res;
      this.calculate();
    });
  }

  calculate(){
    this.sum=0;
    this.baskets.forEach(element=> {
      this.sum += (element.price * element.quantity)
    });
  }

  removeById(_id: string){
    this._swal.callSwal("Ürünü sepetten silmek istiyor musunuz?", "Ürünü Sil", "Sil",()=>
    {
      let model= {_id: _id};
      this._basket.removeById(model, res => {
        this._toastr.info(res.message);
        this.getAll();
      });
    })

  }
}
