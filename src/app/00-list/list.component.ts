import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-00-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor() {
    this.isOrdenArreglo = this.arregloIsOrden(this.listNumber);
    this.text = this.concatText(this.listText);
    this.objectArray = this.object(this.properties);
  }

  ngOnInit() {}

  listNumber: number[] = [1, 1, 3, 4, 2, 6, 8];
  isOrdenArreglo = false;
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

  listText: string[] = ['pdf', 'jpg', 'png', 'gif', 'tif', 'tiff', 'txt'];
  text = '';
  // Concatenar elementos de un array con un separador pero con el último diferente
  concatText(data: any[]) {
    return data.slice(0, -1).join(', ') + ' y ' + data.slice(-1);
  }

  properties: string[] = ['folder1', 'folder2', 'folder3'];
  objectArray!: any;
  // Crear objeto a partir de un array, colocar un valor al ultimo elemento de la lista
  object(data: any[]): any {
    const parametro = { phone: '72476675', name: 'folder' };
    const result = {};

    data.reduce((acc: any, func, idx, arr) => {
      acc.property = func;
      acc.value = idx + 1 == arr.length ? parametro : {};
      return acc.value;
    }, result);
    return result;
  }
}
