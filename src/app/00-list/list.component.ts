import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-00-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  list: number[] = [1, 1, 3, 4, 2, 6, 8];
  isOrdenArreglo = false;

  constructor() {
    this.isOrdenArreglo = this.arregloIsOrden(this.list);
  }

  ngOnInit() {}

  // comprobar si un arreglo se encuentra ordenado usando una funcion personalizada
  arregloIsOrden(data: any[]) {
    if (data.length <= 1) {
      return true;
    }
    const DIRECTION = data[1] - data[0];
    for (let i = 2; i < data.length; i++) {
      if ((data[i] - data[i - 1]) * DIRECTION < 0) {
        return false;
      }
    }
    return true;
  }
}
