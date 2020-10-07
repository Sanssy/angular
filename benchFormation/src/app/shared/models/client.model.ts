import { StateClient } from '../enums/state-client.enum';
import { ClientI } from '../interfaces/client-i';

export class Client implements ClientI {
  id: number;
  state = StateClient.ACTIVE;
  tva: 20;
  name: string;
  ca: number;
  comment: string;

  totalTTC(): number {
    return this.ca * (1 + this.tva / 100);
  }

  constructor(obj?: Partial<Client>){
    if (obj){
      Object.assign(this, obj);
    }
   }
}
