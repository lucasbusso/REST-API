import { Router } from "express";
import { readdirSync } from "fs";

//__dirname: devuelve las rutas (archivos) del directorio actual (/routes)
const PATH_ROUTER = `${__dirname}`;
const router = Router();
const cleanFileName = (filename: string) => {
  const file = filename.split(".").shift();
  return file;
};
// readdirSync: devuele un array de las rutas (archivos) del directorio actual
// identifica todas las rutas creadas (o que se vayan a crear), las importa dinamicamente y crea la ruta
// gracias a esto, app.ts solo necesita al index para manejar las rutas del proyecto
readdirSync(PATH_ROUTER).filter((filename) => {
  const cleanName = cleanFileName(filename);
  if (cleanName !== "index") {
    import(`./${cleanName}.route`).then((moduleRouter) => {
      // console.log(`Ruta: ${cleanName}`);
      router.use(`/${cleanName}`, moduleRouter.router);
    });
  }
});
export { router };
