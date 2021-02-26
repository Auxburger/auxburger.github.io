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
      name: 'PineappleMinds',
      href: 'https://pineappleminds.com',
      link: 'pineappleminds.com',
      online: false,
      description: 'Website for students, collaborative work.'
    },
    {
      name: 'IT Base',
      href: 'https://itbase.itea-factory.com',
      link: 'itbase.itea-factory.com',
      online: false,
      description: 'Collection of abbreviations and descriptions of IT concepts.'
    },
    {
      name: 'OberSmart',
      href: 'https://obersmart.de',
      link: 'obersmart.de',
      online: true,
      description: 'Application to order with qr codes on table.'
    }
  ];


  public getProjectStatus(project): string {
    if (project.online) {
      return '🟢';
    }
    return '🔴';
  }
}
