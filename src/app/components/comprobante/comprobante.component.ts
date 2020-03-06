import { Component, OnInit } from '@angular/core';
import { ComprobanteService } from '../../services/comprobante.service';
import { Comprobante, Emisor, CFDIRelacionado, Receptor, Concepto, RetencionConcepto, TrasladoConcepto, InformacionAduaneraConcepto, Parte, InformacionAduaneraParte, Impuesto, Retencion, Traslado } from '../../models/comprobante.model'

@Component({
  selector: 'app-comprobante',
  templateUrl: './comprobante.component.html',
  styleUrls: ['./comprobante.component.css']
})
export class ComprobanteComponent implements OnInit {
  showSheetCfdiRelacionado: boolean;
  uuid: string = null;

  cfdiRleacionados: CFDIRelacionado[] = [{
    uuid: 'hola1234567890123456786767676'
  },
  {
    uuid: 'adios123456789012333455676776'
  }];
  emimsor: Emisor = {
    rfc: null,
    nombre: null,
    regimenFiscal: null
  };
  receptor: Receptor = {
    rfc: null,
    nombre: null,
    residenciFiscal: null,
    numRegIdTrib: null,
    usoCFDI: null
  };
  retencionConcepto: RetencionConcepto[] = [{
    base: 1,
    impuesto: 'bad tax',
    tipoFactor: 'bad facator',
    tasaOCuota: 1,
    importe: 1
  },
  {
    base: 2,
    impuesto: 'bad tax',
    tipoFactor: 'bad facator',
    tasaOCuota: 2,
    importe: 2
  },
  ];

  trasladoConcepto: TrasladoConcepto[] = [{
    base: 1,
    impuesto: ' dfdf',
    tipoFactor: 'stringsadfadsf',
    tasaOCuota: 1,
    importe: 1
  },
  {
    base: 2,
    impuesto: ' dfdf',
    tipoFactor: 'stringsadfadsf',
    tasaOCuota: 2,
    importe: 2
  }
  ];
  informacionAduaneraConcepto: InformacionAduaneraConcepto[] = [
    {
      numeroPedimento: 'numero 1'
    },
    {
      numeroPedimento: 'numero 2'
    }
  ];

  informacionAduaneraParte: InformacionAduaneraParte[] = [{
    numeroPedimento: 'numero pedimento 1 '
  },
  {
    numeroPedimento: 'numero pedimento 2'
  }];

  parte: Parte = {
    claveProdServ: 'clave prod serv',
    noIdentificacion: 'numero identificacion',
    cantidad: 1,
    unidad: 'unidad',
    descripcion: 'descripcion',
    valorUnitario: 1,
    importe: 1,
    informacionAduaneraParte: this.informacionAduaneraParte
  };
  concepto: Concepto[] = [{
    retencionConcepto: this.retencionConcepto,
    trasladoConcepto: this.trasladoConcepto,
    informacionAduaneraConcepto: this.informacionAduaneraConcepto,
    cuentaPredial: 'cuenta predial',
    complementoConcepto: null,//array
    parte: this.parte,
    claveProdServ: 'clave prod serv',
    noIdentificacion: 'no identificacion',
    cantidad: 1,
    claveUnidad: 'clave unidad',
    unidad: 'unidad',
    descripcion: ' descripcion',
    valorUnitario: 1,
    importe: 1,
    descuento: 1
  },
  {
    retencionConcepto: this.retencionConcepto,
    trasladoConcepto: this.trasladoConcepto,
    informacionAduaneraConcepto: this.informacionAduaneraConcepto,
    cuentaPredial: 'cuenta predial 2',
    complementoConcepto: null,//array
    parte: this.parte,
    claveProdServ: 'clave prod serv 2',
    noIdentificacion: 'no identificacion 2',
    cantidad: 2,
    claveUnidad: 'clave unidad',
    unidad: 'unidad',
    descripcion: 'descripcion',
    valorUnitario: 2,
    importe: 2,
    descuento: 2
  }
  ];

  retencion: Retencion[] = [{
    impuesto: 'impuesto 1',
    importe: 1
  },
  {
    impuesto: 'impuesto 2',
    importe: 2
  }
  ];

  traslado: Traslado[] = [{
    impuesto: 'impuesto',
    tipoFactor: 'tipo factor',
    tasaOCuota: 1,
    importe: 1
  },
  {
    impuesto: 'impuesto',
    tipoFactor: 'tipo factor',
    tasaOCuota: 2,
    importe: 2
  }];
  impuesto: Impuesto = {
    Retencion: this.retencion,
    Traslados: this.traslado,
    totalImpuestosRetenidos: 1,
    totalImpuestosTrasladados: 1
  }
  comprobante: Comprobante = {
    cfdiRelacionados: this.cfdiRleacionados,
    emisor: this.emimsor,
    receptor: this.receptor,
    conceptos: this.concepto,//
    impuestos: this.impuesto,//
    complemento: null,//undefinded
    addenda: null,//undefinded
    version: null,
    serie: null,
    folio: null,
    fecha: null,
    sello: null,
    formaPago: null,
    noCertificado: null,
    certificado: null,
    condicionesDePago: null,
    subTotal: null,
    descuento: null,
    moneda: null,
    tipoCambio: null,
    total: null,
    tipoDeComprobante: null,
    metodoPago: null,
    lugarExpedicion: null,
    confirmacion: null
  }

  constructor(private comprobanteService: ComprobanteService) {
    console.log(this.comprobante.cfdiRelacionados);
    this.showSheetCfdiRelacionado = false;
  }

  ngOnInit() {
  }

  createComprobante(formaComprobante: any) {
    console.log(formaComprobante);
    console.log(this.comprobante.cfdiRelacionados);
  }

  addCfdiRelacionado() {
    if (this.showSheetCfdiRelacionado == true) {
      this.showSheetCfdiRelacionado = false;
    }
    else {
      this.showSheetCfdiRelacionado = true;
    }

  }
  addingCfdiRelacionado(uuidR: any) {
    let cfdiRelacionadoItem: CFDIRelacionado = {
      uuid: null
    };
    console.log(uuidR.value);
    this.showSheetCfdiRelacionado = false;
    cfdiRelacionadoItem.uuid = uuidR.value
    this.cfdiRleacionados.push(cfdiRelacionadoItem);
  }
  removeCfdiRelacionado(item: CFDIRelacionado) {
    console.log("remover : " + item.uuid);
    console.log(this.cfdiRleacionados.indexOf(item));
    console.log(this.cfdiRleacionados.splice(this.cfdiRleacionados.indexOf(item), 1));

  }
}
