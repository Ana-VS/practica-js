# practica-js
Práctica del módulo "JavaScript desde cero" del Bootcamp Mujeres en Tech de Glovo y KeepCoding

# Classroom management
Necesitamos desarrollar una aplicación hecha con javascript que nos ayude a gestionar los alumnos de nuestra clase.

Partiremos de un listado de alumnos inicial:
```
  const students = [{
  age: 32,
  examScores: [],
  gender: 'male',
  name: 'edu'
},
{
  age: 29,
  examScores: [],
  gender: 'female',
  name: 'silvia'
}]
```

y una serie de utilidades de apoyo en los ejercicios:
```
const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos'];
const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
const availableGenders = ['male', 'female'];
```

Cada requisito tiene un número asignado. Cuando ejecutemos la aplicación, aparecerá el listado completo de requisitos. El usuario debe pulsar el número correspondiente a ese requisito para que se ejecute. Una vez la ejecución termine, volveremos a mostrar el listado de requisitos para que el usuario pueda seleccionar otro. En caso de que el usuario pulse el 0 o un número no contemplado, la aplicación terminará.


## Requisitos indispensables

### 1- Mostrar en formato de tabla todos los alumnos. 
### 2- Mostrar por consola la cantidad de alumnos que hay en clase.
### 3- Mostrar por consola todos los nombres de los alumnos.
### 4- Eliminar el último alumno de la clase.
### 5- Eliminar un alumno aleatoriamente de la clase.
### 6- Mostrar por consola todos los datos de los alumnos que son chicas.
### 7- Mostrar por consola el número de chicos y chicas que hay en la clase.
### 8- Mostrar true o false por consola si todos los alumnos de la clase son chicas.
### 9- Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.
### 10- Añadir un alumno nuevo con los siguientes datos:
  - nombre aleatorio.
  - edad aleatoria entre 20 y 50 años.
  - género aleatorio.
  - listado de calificaciones vacío.

### 11- Mostrar por consola el nombre de la persona más joven de la clase.
### 12- Mostrar por consola la edad media de todos los alumnos de la clase.
### 13- Mostrar por consola la edad media de las chicas de la clase.
### 14- Añadir nueva nota a los alumnos. Por cada alumno de la clase, tendremos que calcular una nota de forma aleatoria(número entre 0 y 10) y añadirla a su listado de notas.
### 15- Ordenar el array de alumnos alfabéticamente según su nombre.
