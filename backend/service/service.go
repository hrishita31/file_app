package service

import (
	"context"
	"fmt"

	"github.com/redis/go-redis/v9"
)

func NewUser(firstName string, username string, C *redis.Client) (string, error) {
	err := C.HSet(context.Background(), "users_db", username, firstName).Err()
	if err != nil {
		return "could not create user", err
	}
	fmt.Println("User created successfully")
	return "user created", fmt.Errorf("success")
}

func GetUser(username string, C *redis.Client) (string, error) {
	err := C.HGet(context.Background(), "users_db", username).Err()
	if err != nil {
		return "could not get user", err
	}
	return "user details fetched", fmt.Errorf("success")
}

func DeleteUser(username string, C *redis.Client) (string, error) {
	err := C.HDel(context.Background(), "users_db", username).Err()
	if err != nil {
		return "could not delete user", err
	}
	fmt.Println("User deleted successfully")
	return "user deleted", fmt.Errorf("success")
}

func NewFile(username string, filename string, C *redis.Client) (string, error) {

	err := C.HSet(context.Background(), "file_db", filename, username).Err()
	if err != nil {
		return "could not create file", err
	}

	fmt.Println("File path entered successfully")
	return "file entered", fmt.Errorf("success")
}

func DeleteFile(filename string, C *redis.Client) (string, error) {
	err := C.HDel(context.Background(), "file_db", filename).Err()
	if err != nil {
		return "could not delete file", err
	}
	fmt.Println("File deleted successfully")
	return "file deleted", fmt.Errorf("success")
}

func RenameFile(filename string, newfilename string, C *redis.Client) (string, error) {
	err := C.HSet(context.Background(), "file_db", filename, newfilename).Err()
	if err != nil {
		return "could not rename the file", err
	}
	fmt.Println("File renamed successfully")
	return "file renamed", fmt.Errorf("success")
}
