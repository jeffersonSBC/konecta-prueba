import { Component }   from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public  token ;

  constructor( ) { 
    this.token = localStorage.getItem('token'); 
  }

}


