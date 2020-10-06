export interface ClientI {
  id: number,
  state: string,
  tva: number,
  name: string,
  ca: number,
  comment: string

  totalTTC(): number;
}
