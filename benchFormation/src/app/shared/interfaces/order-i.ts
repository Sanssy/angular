export interface OrderI {
  id: number,
  tjmHT: number,
  nbJours: number,
  tva: number,
  state: string,
  typePresta: string,
  client: string,
  comment: string
  date: Date;

  totalHT(): number;
  totalTTC(): number;
}
