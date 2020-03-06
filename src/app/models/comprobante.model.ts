export interface Comprobante {
	cfdiRelacionados: CFDIRelacionado[],//LISTO
	emisor: Emisor,//LISTO
	receptor: Receptor,//LISTO
	conceptos: Concepto[],//LISTO
	impuestos: Impuesto,//LISTO
	complemento: any[],//LISTO
	addenda: any[],//
	version: string,//default
	serie: string,//no user
	folio: string,//no user
	fecha: Date,//system
	sello: string,//no user
	formaPago: string, //LISTO
	noCertificado: string,//no user
	certificado: string,//no user
	condicionesDePago: string,
	subTotal: number,//LISTO
	descuento: number,//LISTO
	moneda: string,//LISTO
	tipoCambio: number,//LISTO
	total: number,//LISTO
	tipoDeComprobante: string,//LISTO
	metodoPago: string,//LISTO
	lugarExpedicion: string,//LISTO
	confirmacion: string //no user
}
export interface Emisor {
	rfc: string,
	nombre: string,
	regimenFiscal: string
}

export interface CFDIRelacionado {
	uuid: string,
}

export interface Receptor {
	rfc: string,
	nombre: string,
	residenciFiscal: string,
	numRegIdTrib: string,
	usoCFDI: string
}

export interface Concepto {
	retencionConcepto:RetencionConcepto[],
	trasladoConcepto: TrasladoConcepto[],
	informacionAduaneraConcepto: InformacionAduaneraConcepto[],
	cuentaPredial: string,
	complementoConcepto: any[],
	parte: Parte,
	claveProdServ: string,
	noIdentificacion: string,
	cantidad: number,
	claveUnidad: string,
	unidad: string,
	descripcion: string,
	valorUnitario: number,
	importe: number,
	descuento: number
}

export interface Parte {
	claveProdServ: string;
	noIdentificacion: string;
	cantidad: number;
	unidad: string;
	descripcion: string;
	valorUnitario: number;
	importe: number;
	informacionAduaneraParte: InformacionAduaneraParte[]
}

export interface InformacionAduaneraParte {
	numeroPedimento: string
}
export interface InformacionAduaneraConcepto {
	numeroPedimento: string
}

export interface TrasladoConcepto {
	base: number,
	impuesto: string,
	tipoFactor: string,
	tasaOCuota: number,
	importe: number
}

export interface RetencionConcepto {
	base: number,
	impuesto: string,
	tipoFactor: string,
	tasaOCuota: number,
	importe: number

}
export interface Impuesto{
	
    Retencion:Retencion[],
	Traslados:Traslado[],
    totalImpuestosRetenidos:number,
  	totalImpuestosTrasladados:number

}
export interface Retencion{
    impuesto:string,
    importe:number
}

export interface Traslado{
    impuesto:string,
    tipoFactor:string,
    tasaOCuota:number,
    importe:number
}