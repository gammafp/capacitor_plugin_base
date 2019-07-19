# capacitor_plugin_base
Una base web para desarrollar plugins de Capacitor

#### Es necesario tener node actualizado.

0) Se instala todos los paquetes con 
```
npm i
```

1) Se agrega android con (el nombre del dominio es creation.tool.plugin vease en capacitor.config.json): 
```
> npx cap add android
```

2) Se instala el plugin en la raíz del proyecto tal cual nos enseña hacer capacitor:
```
> npx @capacitor/cli plugin:generate
```

3) Se pueden usar distintos comandos creados para facilitar el uso de la herramienta:

- Editar solo el HTML sin actualización: 
```
> npm run dev
```

- Transpilar el proyecto y abrir Android Studio
```
> npm run android
```

- Transpilar el proyecto y actualizar Android Studio en tiempo real
```
> npm run build 
```
---
#### Herrores conocidos: 
Aún no se ha podido hacer que el plugin funcione correctmente con typescript sin meterlo en node_modules.

---
## Herramienta en desarrollo
