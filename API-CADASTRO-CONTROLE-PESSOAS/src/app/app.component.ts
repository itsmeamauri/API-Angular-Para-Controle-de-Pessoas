import { Component } from '@angular/core';
import { MenuItem } from './interfaces/menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'API-CADASTRO-CONTROLE-PESSOAS';

  items: MenuItem [] = [
    {
      'name': 'Home',
      'url': '/home'
    },
    {
      'name': 'Profiles',
      'url':  '/profile'
    }
  ]

  exibirAlerta(has: string) {
    alert(`aqui ${has} um alerta`);
  }
  
}
