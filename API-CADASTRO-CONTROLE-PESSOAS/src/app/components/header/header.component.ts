import { Component,Input } from '@angular/core';

@Component({
  selector: 'barra-navegacao-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input() items: any[] = [];

}
