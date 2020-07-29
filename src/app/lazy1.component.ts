import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <p>
      lazy1 works!
    </p>
    <form action="/action_page.php">
      <label for="fname">First name:</label>
      <input type="text" id="fname" name="fname"><br><br>
      <label for="lname">Last name:</label>
      <input type="text" id="lname" name="lname"><br><br>
      <input type="submit" value="Submit">
    </form>
  `,
  styles: [
  ]
})
export class Lazy1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
