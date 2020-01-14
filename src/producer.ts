import { Tedis } from "tedis";

export default class Producer {

  tedis: Tedis;
  setName: string;

  public constructor(tedis: Tedis, setName: string) {
    this.tedis = tedis;
    this.setName = setName;
  }

  public produce( data: { [propname: string]: number}) {
    this.tedis.zadd(this.setName, { one: 1 })
      .then( (result) => console.log(result))
      .catch( err => console.log(err));
  }

}
