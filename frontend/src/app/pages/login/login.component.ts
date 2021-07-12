import { Component, OnInit }      from '@angular/core';
import { FormGroup, FormBuilder}  from '@angular/forms';
import { LoginService }           from '../../services/login.service';
import { AlertService }           from '../../services/alert.service';
import { ActivatedRoute,Router}   from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  formLogin: FormGroup; 

  constructor(
    private fb      : FormBuilder, 
    private _login  : LoginService,
    private _alert  : AlertService,
    private route   : ActivatedRoute,
    private router  : Router,
    ) { 
    this.createFormLogin();
  }

  ngOnInit() {
  }

  createFormLogin(){
    this.formLogin = this.fb.group({
      email:    [''],
      password: ['']
    });
  }

  loginByToken(){
    this.formLogin.value;
    this._login.authenticLogin(this.formLogin.value).subscribe(
      response => {
        console.log(response);
        if(response['error']==false) {
            localStorage.setItem('token',  response['token']);
            localStorage.setItem('rol', response['user']['rol']);

          for(let permission of response['permissions']){
            localStorage.setItem(permission.permission,"true");
          }
          this.router.navigate(['home']);
       
        }
      },
      error  => {
        this._alert.alertaSimple('Ocurrio un Problema');
        localStorage.clear();
        this.ngOnInit();
      }
    );
  }

}
