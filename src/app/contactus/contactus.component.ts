import { Component } from '@angular/core';

@Component({
  selector: 'app-contactus',
  imports: [],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.scss'
})
export class ContactusComponent {

  a:string = "kumar";
  b = "ravi singh";
  abc()
  {
    alert("weclome to angular");
  }  

}
