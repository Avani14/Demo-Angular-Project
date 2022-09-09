import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  title="Hello from BridgeLabz";
  imgURL = "../assets/BridgeLabz-2.jpg";
  linkToWebPage = "https://www.bridgelabz.com/";
  isFirstName = false;
  make = "Shikamaru"
  target="_blank";
  name:string="";
  nameError:string="";
  animeCharacters = ["Itadori","Sasuke","Itachi","Kakashi"]
  
  ngOnInit(): void {
  }
  onClickImage($event:any){
    window.open(this.linkToWebPage,"_blank");
  }
  inputHandle($event:any){
    const nameReg = RegExp("^[A-Z]{1}[a-z]{2,}$")
    if(nameReg.test($event.target.value)){
      this.nameError=""
      return;
    }
    this.nameError="Invalid name!!";
  }
}
