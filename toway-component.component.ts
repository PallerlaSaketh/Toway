import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toway-component',
  templateUrl: './toway-component.component.html',
  styleUrls: ['./toway-component.component.css']
})
export class TowayComponentComponent {

  name: string = "Aravind";
  age: number = 25;
  value1: number = 0;
  value2: number = 0;
  Result: number = 0;


  handleSub() {
    console.log("Name :" + this.name + " Age: " + this.age);
  }
  add() {
    this.Result = this.value1 + this.value2;
  }
  sub() {
    this.Result = this.value1 - this.value2;
  }
  division() {
    this.Result = this.value1 / this.value2;
  }
  multi() {
    this.Result = this.value1 * this.value2;
  }
}




