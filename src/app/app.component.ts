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
      href: 'https://www.pineappleminds.com',
      link: 'pineappleminds.com',
      online: false,
      description: 'Website for students, collaborative work.'
    },
    {
      name: 'IT Base',
      href: 'https://itbase.auxburger.com',
      link: 'itbase.auxburger.com',
      online: false,
      description: 'Collection of abbreviations and descriptions of IT concepts.'
    },
    {
      name: 'OberSmart',
      href: 'https://www.obersmart.de',
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
