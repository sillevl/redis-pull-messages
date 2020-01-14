import { Tedis, TedisPool } from "tedis";

console.log("Hello world")

const tedis = new Tedis({
  port: 6379,
  host: "127.0.0.1"
});

tedis.keys("*")
  .then( (keys) => {
    console.log(keys);
  });
