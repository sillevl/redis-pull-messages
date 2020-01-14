import { Tedis } from "tedis";
import Producer from "./producer";

console.log("Hello world")

const tedis = new Tedis({
  port: 6379,
  host: "127.0.0.1"
});

const setName :string = "messages";
const producer = new Producer(tedis, setName);

producer.produce( { one: 1 } )

