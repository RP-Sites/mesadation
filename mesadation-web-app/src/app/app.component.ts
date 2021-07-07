import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  accounts: any[] = [{id: 1, label: 'Pedro'}, {id: 2, label: 'André'}];
  types: any[] = [{id: 1, label: 'Mesada'}, {id: 2, label: 'Bonus'}];

  model = {
    value: 0, 
    account: 0, 
    type: 0, 
    description: ''
  };

  // credito: {
  //   valor: number;
  //   destino: Perfil[];
  //   tipoEntrada: Entradas[] = ['mesada', 'bonus'];
  //   descricao: string;
  // }
}


