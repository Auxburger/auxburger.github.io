import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'auxburger';

  projects = [
    {
      name: "PineappleMinds",
      href: "https://pineappleminds.com",
      link: "pineappleminds.com",
      description: "Website for students, collaborative work."
    },
    {
      name: "IT Base",
      href: "https://itbase.itea-factory.com",
      link: "itbase.itea-factory.com",
      description: "Collection of abbreviations and descriptions of IT concepts."
    }
  ]

}
