import { Console } from "console";
import { Tedis } from "tedis";
import { argv } from "yargs"

const tedis = new Tedis({
  port: 6379,
  host: process.env.REDIS_HOST || "127.0.0.1"
});

const processingTime = argv.slow ? 10000 :  100

const doSomeSlowProcessing = async () => {
    await new Promise( resolve => setTimeout(resolve, processingTime))
}

(async () => {
    console.log("*** CONSUMER ***")
    if(argv.slow) { console.log('Starting in slow mode!')}
    console.log("waiting for messages...")
    while (true) {
        const message  = await tedis.blpop(0, 'temp-sensor-iot-app')
        console.log(message[1])
        await doSomeSlowProcessing()
    }
})()