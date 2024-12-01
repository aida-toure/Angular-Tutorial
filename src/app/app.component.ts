/**
 * @fileOverview
 * TypeScript is like javascript, but typescript is more convenient because we can use type.
 * But as for javascript, typescript define the logics of the page or a content of the page
 * It also used as a Controller
 * Section : HelloWorld
 */

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  // ------ show html but I put it in comment for the sake of this tutorial
  //imports: [RouterOutlet],
  // ------ TEMPLATE is the content of the page. (essential)
  // -- I can put the url's html thanks to templateURl
  //templateUrl: './app.component.html',
  // -- I can use template: < write html>,
  // - note: for the sake of this tutorial I use template.
  template:
    "<h1> Hello world!</h1>",
  // ------
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'homes';
}
