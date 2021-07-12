#fronted
--Se realiza el frontend en angular y se usa JWT para login
--Para poder usar de manera correcta el frontend, se deben asignar los permisos a cada rol en el panel
  de administración del backend
#backend
--Se crea panel de adminitración y se habilitan las API para login y gestion de usuarios y/o clientes
--Es necesario conservar el puerto 8082 en el docker para que las rutas del frontend no se vean afectadas

#info especial
--el proyecto esta configurado para su inicio por medio de docker-compose up -d
--se requiere una configuración de base de datos tanto en el .env como en config/database.php
--se uso el driver de postgres
--las migraciones tienen seeder con precarga de información a la base de datos, de tablas auxiliares y de el       superadminitrador

