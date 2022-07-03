import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  public heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  public heroeBorrado: string = '';

  borrarHeroe(): void {

    this.heroeBorrado = this.heroes.pop() || 'Listado vacio'; //En caso de que se devuelva undefined se asigna 'Listado vacio'
    console.log('El heroe borrado ha sido: ', this.heroeBorrado);

  }

}
