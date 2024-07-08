# DEVELOPMENT

Pasos para levantar la app en desarrollo

* 1.Levantar la base de datos

```
docker compose up -d
```

#PRISMA COMMANDS

```
npx prisma init
npx prisma migrate dev
npx prisma generate

```
2. Renombrar el .env.template a .env 
3. Reemplazar variables de entorno
4. Ejecutar el seed para [crear la base de datos local](localhost:3000/api/seed)

# PRODUCTION

# STAGE

