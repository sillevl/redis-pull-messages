
# Redis Pull Messages

Demonstration application showing how the principle of pull messages can be used in Redis and simple List.

## Start the application

```cli
docker-compose up -d
```

This will start 1 producer and 1 consumer. The producer generates a new message every 1000ms. The consumer needs about 100ms to process a message.

## Redis CLI

You can have access to the Redis cli using the following command:

```cli
docker-compose run redis redis-cli -h redis
```

## Monitoring producer and consumer activity (logs)

The log for both the consumer and producer can be displayed using the following commands:

Producer:

```cli
docker-compose logs -f producer
```

Consumer:

```cli
docker-compose logs -f consumer
```

## Scaling producers and consumer

To scale the instances you can use the following commands:

Producers:

```cli
docker-compose up -d --scale producer=10
```

Consumers:

```cli
docker-compose up -d --scale consumer=10
```
Pick any number you want.

## Producer burst

To simulate bursts of new data, you can run a command to generate 100 measurements as fast as possible. Use the following command:

```cli
docker-compose run producer npm run producer -- --burst --number 100
```

This instance will close as soon as it is finished.
