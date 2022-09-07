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
  target="_blank";
  ngOnInit(): void {
  }
  onClickImage($event:any){
    window.open(this.linkToWebPage,"_blank");
  }

}
