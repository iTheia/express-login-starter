# Implementación de un Sistema de Autenticación Seguro con Express

En esta práctica, aprenderemos a crear un sistema de autenticación utilizando Express, una herramienta fundamental para cualquier desarrollador web. Este sistema de autenticación constará de dos rutas principales: `/login` y `/register`.

## Requisitos Previos

Antes de comenzar, es importante mencionar que la seguridad es una prioridad. Por lo tanto, antes de almacenar cualquier contraseña en el repositorio, debemos asegurarnos de encriptarla adecuadamente. Para lograrlo, utilizaremos la biblioteca "bcryptjs", que ya está instalada y nos permite encriptar cadenas de texto.

Además, para garantizar la seguridad al transmitir datos de usuario, responderemos a las solicitudes de inicio de sesión con un token JSON Web (JWT). Hemos instalado previamente la biblioteca "jsonwebtoken" para facilitar este proceso.

## Registro de Usuarios

Cuando un usuario desee registrarse, deberá proporcionar un nombre de usuario, una contraseña y confirmar la contraseña escribiéndola nuevamente en un campo llamado "passwordConfirm". Esto es crucial para asegurarnos de que el usuario haya ingresado correctamente su contraseña. Además, verificaremos que no haya otro usuario con el mismo nombre de usuario en nuestro repositorio.

## Inicio de Sesión

Para iniciar sesión, el usuario deberá proporcionar su nombre de usuario y contraseña. Verificaremos estos datos para asegurarnos de que coincidan con los almacenados en nuestro repositorio. Si la información es correcta, responderemos con un token JWT, que es un método seguro para transmitir datos de usuario. Para verificar la validez de los tokens JWT, puedes utilizar la página https://jwt.io/.

## Configuración

En el archivo de configuración, puedes definir variables importantes que la aplicación necesitará. Esto es especialmente útil para almacenar información confidencial, como claves secretas, que deben mantenerse seguras. Así que no olvides utilizar el archivo de configuración para guardar cualquier variable que sea necesaria para el funcionamiento de tu programa.

Con estos conceptos básicos en mente, ¡estamos listos para comenzar a implementar nuestro sistema de autenticación seguro utilizando Express! ¡Buena suerte en tu práctica! 😉
