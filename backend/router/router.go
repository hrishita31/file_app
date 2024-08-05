package router

import (
	"net/http"
	"try1/handler"

	"github.com/labstack/echo/v4"
	mw "github.com/labstack/echo/v4/middleware"
)

func NewRouter() *echo.Echo {

	e := echo.New()

	e.Use(mw.CORSWithConfig(mw.CORSConfig{
		AllowOrigins: []string{"*"},
		AllowMethods: []string{http.MethodGet, http.MethodPut, http.MethodPost, http.MethodDelete},
	}))

	e.POST("/newUser", handler.NewUser())
	e.GET("/getUser", handler.GetUser())
	e.POST("/deleteUser", handler.DeleteUser())
	e.POST("/newFile", handler.NewFile())
	e.POST("/deleteFile", handler.DeleteFile())
	e.PATCH("renameFile", handler.RenameFile())
	return e
}
