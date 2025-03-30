import { Component } from '@angular/core';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AboutComponent } from './about/about.component';
import { ServicelisteComponent } from './serviceliste/serviceliste.component';

@Component({
  selector: 'app-home',
  imports: [AcceuilComponent,AboutComponent,ServicelisteComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
