package infra

import (
	"context"
	"fmt"

	"github.com/redis/go-redis/v9"
)

var Client *redis.Client

type IRedisClient interface {
	NewRedisClient() *redis.Client
}

type RedisClient struct {
	C *RedisClient
}

func NewRedisClient() *redis.Client {
	client := redis.NewClient(&redis.Options{
		Addr:     "localhost:6379",
		Password: "", // no password set
		DB:       0,  // use default DB
	})

	err := client.Ping(context.Background())
	if err != nil {
		fmt.Println(err)
	}
	Client = client
	fmt.Println("Connection successful")
	return Client
}

func FetchClient() *redis.Client {
	return Client
}
