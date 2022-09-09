import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-demo',
  templateUrl: './directives-demo.component.html',
  styleUrls: ['./directives-demo.component.css']
})
export class DirectivesDemoComponent implements OnInit {
  users : any[] = [];
  userListNotEmpty=false;
  showUser(uname:any){
    this.users.push({
      name:uname.value
    })
    this.userListNotEmpty=true
  }
  Orchid = "../assets/Orchid.jpg";
  
  Roses = "../assets/Roses.png";
  
  Tulip = "../assets/Tulip.png";
  
  Lavender = "../assets/Lavender.png";
  make = "Tulip"
  deleteUser(){
    this.users.splice(this.users.length -1)
    if (this.users.length == 0){
      this.userListNotEmpty=false
    }
  }
  ngOnInit(): void {
  }

}
