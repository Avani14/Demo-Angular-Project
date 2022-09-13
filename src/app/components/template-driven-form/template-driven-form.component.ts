import { Component, OnInit,ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  @ViewChild('Form') submitButton!:NgForm;
  constructor() { }
  users:any = []
  userNotNull=false
  displayColumns:string[]=['name','phone number','address'];
  onSubmit(){
    this.users.push(this.submitButton.value)
    this.userNotNull=true
    console.log(this.users);
  }
  ngOnInit(): void {
  }
  removeElements(){
    this.users.splice(this.users.length-1)
    if(this.users.length == 0){
      this.userNotNull=false
    }
  }

}
