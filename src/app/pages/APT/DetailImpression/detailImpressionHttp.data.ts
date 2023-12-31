export interface EtiquetteImprimeeData {
  id?: string;
  idEtiquette: string;
  refProd: string;
  nbrCopie: number;
  serialNumber: string;
  numOF: string;
  date: Date;
  userMatricule: string;
  state: string;
  withDataMatrix: boolean;
  action: string;
  motifReimpression: string;
  formatLot: string;
  filePath: string;
  dataMatrixData: string;
  checked?: boolean;
  problem?: string;
  nbrDuplication?: number;
}
export interface GetEtiquetteImprimeeResultData {
  Status: string;
  etiquettesImprimees: EtiquetteImprimeeData[];
}
export interface GetTotalNumberEtiquetteImprimeeResultData {
  Status: string;
  etiquettesImprimees: {
    total: number;
  }[];
}
export interface GetTotalNumberEtiquetteImprimeeByMonthResultData {
  Status: string;
  etiquettesImprimees: {
    total: number;
    month: number;
  }[];
}
export interface GetTotalNumberEtiquetteImprimeeByDayResultData {
  Status: string;
  etiquettesImprimees: {
    total: number;
    month: number;
    day: number;
  }[];
}
export interface EtiquetteImprimeeResultData {
  Status: string;
  etiquetteImprimee: EtiquetteImprimeeData[];
}
export interface UpdateEtiquetteImprimeeResultData {
  Status: string;
  numberOfAffectedRows: number;
  etiquetteImprimee: EtiquetteImprimeeData;
}
export interface GetPrintDetailResultData {
  Status: string;
  printDetail: PrintDetailData[];
}
export interface PrintDetailData {
  refProd: string;
  nbrCopie: number;
  serialNumber: string;
  numOF: string;
  withDataMatrix: boolean;
  motifReimpression: string;
  formatLot: string;
  filePath: string;
  dateImpr: Date;
  dateReimpr: Date;
  imprUserMatricule: string;
  reImprUserMatricule: string;
}
