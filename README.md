# vacation-tracking
Implementation from Vacaction Tracking System based on the proposal of the book: Object Oriented Analysis and Design with Applications

## INSTRUCCIONES PARA LEVANTAR EL PROYECTO:
### Clonar el proyecto:
``` git clone https://github.com/jmauito/vacation-tracking.git ```

Ingresar a la carpeta del proyecto creado
``` cd vacation-tracking/ ```

### Inicializar la base de datos:
``` cd database/ ```
``` docker-compose up ```

### Crear la base de datos:
Para monitorizar la base de datos puedes utilizar pgadmin, ingresando al navegador con la URL:
http://localhost:5050/

El usuario es: developer@ucacue.edu.ec
La contraseña es:ucacue-2023

Una vez dentro, puedes crear la base de datos con el nombre de vacation-tracking.

### Inicializar la API
Si estás en la carpeta de la base de datos debes salir de la misma. Utiliza el comando:
``` cd .. ```

Ingresa a la capreta del proyecto backend:
``` cd backend/vacationtracking/ ```

Abre el proyecto en el IDE o Editor de código de tu preferencia y ejecútalo. O puedes ejecutar el binario:

``` java -jar build/libs/vacationtracking-0.0.1-SNAPSHOT.jar ```

Una vez el proyecto se encuentre ejecutándose, se debe correr el script data.sql que se encuentra en la carpeta resources del proyecto de java.


### Inicializar la Web Application
Si estás en la carpeta del backend debes salir de esta, para eso utiliza el comando:
``` cd ..  ```

Ingresa a la carpeta del proyecto frontend:
``` cd frontend/vacation-tracking/ ```

Instalar las dependencias
``` npm i ```

Ejecuta el proyecto:
``` npm start ```

Abre una pestaña del navegador e ingresa a la siguiente dirección:
http://localhost:3000 

Te pedirá usuario y contraseña, los usuarios de prueba con los que cuenta la aplicación son:

nick.fury@mail.com (usuario administrador)
natasha.romanoff@mail.com
peter.parker@mail.com
tony.stark@mail.com
clark.kent@mail.com

Todos ellos tienen como contraseña: dummy-password



### Use case model
The top level use case analysis
![Use case model](out/analysis-and-design/F_12-1_The_top_level_Use_case/F_12-1_The_top_level_Use_case.svg)
### Class model
The class model. Added Designation class who not present in original class model.
![Class model](out/analysis-and-design/F_12_10_Analysis_Model_Class/F_12_10_Analysis_Model_Class.svg)
To see the prototype of UI [click here](https://www.figma.com/file/pEDBmNkf0CBFFMRYHnHx3m/Track-Vacation-System?node-id=0%3A1&t=CGdFgmTLuj9amGqZ-1)

Éxitos.

## Licencia:

Copyright 2023 Mauricio Zárate, William Suárez, Rocío Tenezaca

Por la presente se concede permiso, libre de cargos, a cualquier persona que obtenga una copia de este software y de los archivos de documentación asociados (el "Software"), a utilizar el Software sin restricción, incluyendo sin limitación los derechos a usar, copiar, modificar, fusionar, publicar, distribuir, sublicenciar, y/o vender copias del Software, y a permitir a las personas a las que se les proporcione el Software a hacer lo mismo, sujeto a las siguientes condiciones:

El aviso de copyright anterior y este aviso de permiso se incluirán en todas las copias o partes sustanciales del Software.
EL SOFTWARE SE PROPORCIONA "COMO ESTÁ", SIN GARANTÍA DE NINGÚN TIPO, EXPRESA O IMPLÍCITA, INCLUYENDO PERO NO LIMITADO A GARANTÍAS DE COMERCIALIZACIÓN, IDONEIDAD PARA UN PROPÓSITO PARTICULAR E INCUMPLIMIENTO. EN NINGÚN CASO LOS AUTORES O PROPIETARIOS DE LOS DERECHOS DE AUTOR SERÁN RESPONSABLES DE NINGUNA RECLAMACIÓN, DAÑOS U OTRAS RESPONSABILIDADES, YA SEA EN UNA ACCIÓN DE CONTRATO, AGRAVIO O CUALQUIER OTRO MOTIVO, DERIVADAS DE, FUERA DE O EN CONEXIÓN CON EL SOFTWARE O SU USO U OTRO TIPO DE ACCIONES EN EL SOFTWARE.








