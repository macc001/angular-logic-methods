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
    // this.groupMapToArray();
    this.groupMapToArray2();
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

  /***
   * AGRUPAR ARRAY
   * 
   * [{
          Nombre: 'Fulano Detal',
          Descripcion: 'Un string explicando a qué se dedica',
          Ciudad: 'CIUDAD 1'
      },
      {
          Nombre: 'Otro Fulano',
          Descripcion: 'String diferente que tambien describe su trabajo',
          Ciudad: 'CIUDAD 1'
      },
      {
          Nombre: 'Tercer Fulano',
          Descripcion: 'Su trabajo en donde sea que este',
          Ciudad: 'CIUDAD 2'
      }]
   * 
   * 
   */
  arrayRespuesta = [
    {
      Nombre: 'Fulano Detal',
      Descripcion: 'Un string explicando a qué se dedica',
      Ciudad: 'CIUDAD 1',
    },
    {
      Nombre: 'Otro Fulano',
      Descripcion: 'String diferente que tambien describe su trabajo',
      Ciudad: 'CIUDAD 1',
    },
    {
      Nombre: 'Tercer Fulano',
      Descripcion: 'Su trabajo en donde sea que este',
      Ciudad: 'CIUDAD 2',
    },
  ];
  groupMapToArray() {
    // let nuevoObjeto = {};
    let nuevoObjeto = new Map();
    this.arrayRespuesta.forEach((x) => {
      //Si la ciudad no existe en nuevoObjeto entonces
      //la creamos e inicializamos el arreglo de profesionales.
      if (!nuevoObjeto.hasOwnProperty(x.Ciudad)) {
        nuevoObjeto[x.Ciudad] = {
          profesionales: [],
        };
      }
      //Agregamos los datos de profesionales.
      nuevoObjeto[x.Ciudad].profesionales.push({
        nombre: x.Nombre,
        descripcion: x.Descripcion,
      });
    });
    console.log(nuevoObjeto);

    const propertyNames = Object.keys(nuevoObjeto);

    var newArrar = [];
    for (var key in nuevoObjeto) {
      if (nuevoObjeto.hasOwnProperty(key)) {
        newArrar.push({
          city: key,
          profesional: nuevoObjeto[key],
        });
      }
    }
    console.log(propertyNames);
    console.log(newArrar);
  }

  /***
   * AGRUPAR ARRAY
   * 
   *[
    {
      concept: 'OTROS INGRESO',
      mes: [
        {
          mes: 3,
          concepto: 'OTROS INGRESO',
          importe: '50.00',
        },
        {
          mes: 5,
          concepto: 'OTROS INGRESO',
          importe: '10.00',
        },
        {
          mes: 6,
          concepto: 'OTROS INGRESO',
          importe: '1690.00',
        },
      ],
    },
    {
      concept: 'VENTAS',
      mes: [
        {
          mes: 5,
          concepto: 'VENTAS',
          importe: '500.00',
        },
      ],
    },
    {
      concept: 'ALQUILERES',
      mes: [
        {
          mes: 6,
          concepto: 'ALQUILERES',
          importe: '596.00',
        },
      ],
    },
  ]
   * 
   * 
   */
  arrayRespuesta2 = [
    {
      concept: 'OTROS INGRESO',
      mes: [
        {
          mes: 3,
          concepto: 'OTROS INGRESO',
          importe: '50.00',
        },
        {
          mes: 5,
          concepto: 'OTROS INGRESO',
          importe: '10.00',
        },
        {
          mes: 6,
          concepto: 'OTROS INGRESO',
          importe: '1690.00',
        },
      ],
    },
    {
      concept: 'VENTAS',
      mes: [
        {
          mes: 5,
          concepto: 'VENTAS',
          importe: '500.00',
        },
      ],
    },
    {
      concept: 'ALQUILERES',
      mes: [
        {
          mes: 6,
          concepto: 'ALQUILERES',
          importe: '596.00',
        },
      ],
    },
  ];
  groupMapToArray2() {
    console.log(this.arrayRespuesta2);
    const newArray = this.arrayRespuesta2.map((item) => {
      const importeTotal = item.mes.reduce(function (
        valorAnterior,
        valorActual,
        indice,
        vector
      ) {
        return valorAnterior + Number(valorActual.importe);
      },
      0);

      return {
        importeTotal: importeTotal,
        concept: item.concept,
        enero: this.getMes(item.mes, 1),
        febrero: this.getMes(item.mes, 2),
        marzo: this.getMes(item.mes, 3),
        abril: this.getMes(item.mes, 4),
        mayo: this.getMes(item.mes, 5),
        junio: this.getMes(item.mes, 6),
        julio: this.getMes(item.mes, 7),
        agosto: this.getMes(item.mes, 8),
        septiembre: this.getMes(item.mes, 9),
        obtubre: this.getMes(item.mes, 10),
        noviembre: this.getMes(item.mes, 11),
        diciembre: this.getMes(item.mes, 12),
      };
    });
    console.log('NEW AArray');
    console.log(newArray);
  }

  getMes(list: I_Mes[], position: number): string {
    let mes = '';
    for (let i = 0; i < list.length; i++) {
      if (list[i].mes === position) {
        mes = list[i].importe;
        break;
      }
    }
    return mes ? mes : '';
  }

  listMonth = [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre',
  ];
}

interface I_Mes {
  mes: number;
  concepto: string;
  importe: string;
}
