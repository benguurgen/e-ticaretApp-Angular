import { Component } from '@angular/core';
import { SharedModule } from '../../../../common/shared/shared.module';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { LoginModel } from '../../models/login.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
// import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(
    // private _toastr: ToastrService
    // private _spinner: NgxSpinnerService
    private _auth: AuthService,
    private _toastr: ToastrService,
    private _router: Router
  ){
    // this._toastr.success("Deneme mesajı");
    // this._spinner.show();
    // setTimeout(() => {
    //   this._spinner.hide();
    // }, 5000);
  }

  login(form:NgForm){
    if(form.valid){
      let model= new LoginModel()
      model.email = form.controls["email"].value;
      model.password = form.controls["password"].value;

      this._auth.login(model, res=>{
        this._toastr.success("Giriş Başarılı");
        localStorage.setItem("token", res.token);
        localStorage.setItem("user", JSON.stringify(res.user));

        this._router.navigateByUrl("/");
      })
    }
  };
}
