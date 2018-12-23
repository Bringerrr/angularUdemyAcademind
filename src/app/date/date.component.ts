import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-date",
  templateUrl: "./date.component.html",
  styleUrls: ["./date.component.css"]
})
export class DateComponent implements OnInit {
  message: string = "World";

  item = ["LOL", "KEK", "CHEBURECK"];

  loggedIn = false;

  constructor() {
    // setInterval(()=>{
    //   this.message = new Date().toTimeString();
    // })
  }

  ngOnInit() {}
}
