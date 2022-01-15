install Styles Componets 
https://www.npmjs.com/package/@emotion/react
https://www.npmjs.com/package/@emotion/styled

1--> npm i @emotion/react
2--> npm i @emotion/styled


En jsx podemos utilizar HTML con expresiones JavaScript, pero
tambien es posible crear un elemento HTML con la sintaxis de un
componente y añadir propiedades CSS

en lugar de utilizar una hoja de estilos globales o una libreria externa, 
se escribe el codigo CSS en cada comonente (CSS en JS)

ventajas:
  Al dejar de utilizar un componente, podemos eliminar su codigo CSS tambien, 
  a diferencia de una hoja de estilos global.
  Sigues teniendo la ventaja de reutilizar codigo CSS

  
comando git
git checkout -b nuevo-from main
  1- main --> la rama actual en la que esta
  2- nuevo-from --> el nombre de la nueva rama  en la que se van hacer los cambios

git add .
git commit -m "mi comentario de los cambios"
git checkout main
  1- se cambia a la ram principal para reviar los cambios
git merge nuevo-from
  1- se integra al proyecto los cambios realizados
git branch -d nuevo-from
  1- se elimina la rama creada
git push -u origin main
  1- se sube al github