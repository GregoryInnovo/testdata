# API de Gestión de Citas

API RESTful para la gestión de citas, usuarios y servicios, documentada con Swagger y usando Supabase como base de datos.

## Características

- Crear, actualizar y eliminar citas
- Consultar citas por hora, día, semana o mes
- Verificar horarios disponibles por día o semana
- Documentación completa con Swagger
- Integración con Supabase

## Requisitos

- Node.js 14+
- Cuenta en Supabase

## Instalación

1. Clonar el repositorio
```bash
git clone <url-del-repositorio>
cd <nombre-del-repositorio>
```

2. Instalar dependencias
```bash
npm install
```

3. Crear archivo .env basado en env.example
```bash
cp env.example .env
```

4. Editar el archivo .env con tus credenciales de Supabase

5. Crear las tablas en Supabase
   - Copiar el contenido de `supabase-schema.sql`
   - Ejecutarlo en el SQL Editor de Supabase

## Ejecución

```bash
npm start
```

La API estará disponible en `http://localhost:3000`
La documentación Swagger estará disponible en `http://localhost:3000/api-docs`

## Endpoints

### Sistema
- `GET /database/health` - Verificar si la base de datos está activa

### Citas
- `POST /citas` - Crear una nueva cita
- `PUT /citas/:id` - Actualizar cita existente
- `DELETE /citas/:id` - Eliminar cita
- `GET /citas/completas` - Obtener todas las citas con información completa de usuario y servicio
- `GET /citas/hora/:fecha` - Obtener citas en una hora específica
- `GET /citas/dia/:fecha` - Obtener citas en un día específico
- `GET /citas/semana/:fecha` - Obtener citas en una semana específica
- `GET /citas/mes/:fecha` - Obtener citas en un mes específico

### Horarios Disponibles
- `GET /horarios/todos` - Obtener todos los horarios (disponibles y ocupados) para el próximo mes
- `GET /horarios-disponibles/dia/:fecha` - Obtener horarios disponibles en un día
- `GET /horarios-disponibles/semana/:fecha` - Obtener horarios disponibles en una semana

### Usuarios
- `POST /usuarios` - Crear un nuevo usuario
- `GET /usuarios` - Listar todos los usuarios
- `GET /usuarios/completos` - Obtener todos los usuarios con información completa de sus citas
- `GET /usuarios/:id` - Obtener usuario por ID

### Servicios
- `POST /servicios` - Crear un nuevo servicio
- `GET /servicios` - Listar todos los servicios

## Estructura de la Base de Datos

### Tabla: usuarios
- id (UUID)
- nombre_completo (Text)
- tipo_documento (Text)
- numero_documento (Text)
- telefono (Text)

### Tabla: servicios
- id (UUID)
- nombre (Text)
- estado (Text: 'activo' o 'inactivo')

### Tabla: citas
- id (UUID)
- dia (Timestamp)
- tipo_servicio (UUID - FK a servicios)
- duracion (Integer)
- usuario_id (UUID - FK a usuarios)
- estado (Text: 'pendiente', 'confirmada', 'cancelada', 'completada') 