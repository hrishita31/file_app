package main

import (
	"try1/infra"
	"try1/router"
)

func main() {

	infra.NewRedisClient()

	e := router.NewRouter()
	e.Start(":1323")
}
