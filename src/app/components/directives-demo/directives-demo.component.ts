import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-demo',
  templateUrl: './directives-demo.component.html',
  styleUrls: ['./directives-demo.component.css']
})
export class DirectivesDemoComponent implements OnInit {
  users : any[] = [];
  userListNotEmpty=false;
  make = "";
  showUser(uname:any,flower:any){
    if(uname.value.length == 0){
      alert("Please enter valid name")
      return
    }
    this.users.push({
      name:uname.value
    })
    uname.value = ""
    flower.value=""
    this.userListNotEmpty=true
    this.make = flower.value
  }
  Orchid = "../assets/Orchid.jpg";
  
  Roses = "../assets/Roses.png";
  
  Tulip = "../assets/Tulip.png";
  
  Lavender = "../assets/Lavender.png";
  deleteUser(){
    this.users.splice(this.users.length -1)
    if (this.users.length == 0){
      this.userListNotEmpty=false
    }
  }
  ngOnInit(): void {
  }

}
