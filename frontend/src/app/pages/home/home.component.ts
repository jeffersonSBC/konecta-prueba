import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router }from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public token;       
  constructor(
    private route    : ActivatedRoute,
    private router   : Router,
  ) {
    this.token  = localStorage.getItem('token');
   }

  ngOnInit() {
    if(this.token == null){
      this.router.navigateByUrl('/login');
    }
  }
}
