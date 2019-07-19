# capacitor_plugin_base
Una base web para desarrollar plugins de Capacitor

#### Es necesario tener node actualizado.

0) Se instala todos los paquetes con 
```
> npm i
```

1) Se agrega android con (el nombre del dominio es creation.tool.plugin vease en capacitor.config.json): 
```
> npx cap add android
```

2) Se instala el plugin en la raíz del proyecto tal cual nos enseña hacer capacitor:
```
> npx @capacitor/cli plugin:generate
```
3) El plugin se instalará en la raíz de este proyecto y hay que ponerlo en node_modules. Para lograr ponerlo en node_modules se tiene que crear un enlace y lo hacemos con: 
```
> npm i ./nombredelplugin
```
4) Y ahora solo toca actualizar el plugin con:
```
> npx cap sync
```

5) Se pueden usar distintos comandos creados para facilitar el uso de la herramienta:

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
