package handler

import (
	"net/http"
	"try1/infra"
	"try1/service"

	"github.com/labstack/echo/v4"
)

func NewUser() echo.HandlerFunc {
	client := infra.FetchClient()
	return func(c echo.Context) error {
		firstName := c.QueryParam("firstname")
		username := c.QueryParam("username")

		result, err := service.NewUser(firstName, username, client)
		if err != nil {
			return c.String(http.StatusUnauthorized, err.Error())
		}
		return c.String(http.StatusAccepted, result)
	}
}

func GetUser() echo.HandlerFunc {
	client := infra.FetchClient()
	return func(c echo.Context) error {
		username := c.QueryParam("username")

		result, err := service.GetUser(username, client)
		if err != nil {
			return c.String(http.StatusUnauthorized, err.Error())
		}
		return c.String(http.StatusAccepted, result)
	}
}

func DeleteUser() echo.HandlerFunc {
	client := infra.FetchClient()
	return func(c echo.Context) error {
		username := c.QueryParam("username")
		result, err := service.DeleteUser(username, client)
		if err != nil {
			return c.String(http.StatusUnauthorized, err.Error())
		}
		return c.String(http.StatusAccepted, result)
	}
}

func NewFile() echo.HandlerFunc {
	client := infra.FetchClient()
	return func(c echo.Context) error {
		username := c.QueryParam("username")
		filename := c.QueryParam("filename")

		result, err := service.NewFile(username, filename, client)
		if err != nil {
			return c.String(http.StatusUnauthorized, err.Error())
		}
		return c.String(http.StatusAccepted, result)
	}
}

func DeleteFile() echo.HandlerFunc {
	client := infra.FetchClient()
	return func(c echo.Context) error {
		filename := c.QueryParam("filename")

		result, err := service.DeleteFile(filename, client)
		if err != nil {
			return c.String(http.StatusUnauthorized, err.Error())
		}
		return c.String(http.StatusAccepted, result)
	}
}

func RenameFile() echo.HandlerFunc {
	client := infra.FetchClient()
	return func(c echo.Context) error {
		filename := c.QueryParam("filename")
		newfilename := c.QueryParam("newfilename")
		result, err := service.RenameFile(filename, newfilename, client)
		if err != nil {
			return c.String(http.StatusUnauthorized, err.Error())
		}
		return c.String(http.StatusAccepted, result)
	}
}
