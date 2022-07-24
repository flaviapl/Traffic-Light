Para la realización del semaforo hemos creado dos div uno para el palo y el otro para el semaforo y dentro de ese ultimo hemos creado otros 3 divs hijos para las 3 luces roja, naranja y verde .
Hemos creado tambièn 3 clases in CSS para cada uno de ellos para darle color y forma: .lightRed .lightOrange  y .lightGreen.

Se ha creado un component TrafficLight.jsx y dentro de la función con el mismo nombre se ha creado la variable de estado  useState  [color, setColor] .

 A cada div hijo se ha añadido la clase de .css +  un ternario que se encarga de establecer que si el color es del mismo color de la clase de css entonces que brille si no no " " y se le ha añadito un onClick para que la función se active al click sobre el color elegido del semaforo. 

 <img src="/workspace/react-hello/src/img/2022-07-24_18h34_36.png">

##### Download the boilerplate using git

```
$ git clone https://github.com/4GeeksAcademy/react-hello.git
$ cd react-hello
```

##### and install the npm package:
```
$ npm install
```

## Start coding!

For Windows, Mac, Linux or Gitpod, start the webpack server with live reload:
- `$ npm run start`

You can update the `styles/index.css` or `js/index.js` depending on your needs.
Add more files into your, `./src/js/components` or styles folder as you need them.

## Publish your website!

This boilerplate is 100% compatible with the free [github pages](https://pages.github.com/) and [vercel](https://vercel.com/) hosting.

It takes just 2 minutes to deploy, [click here to start the process](https://github.com/4GeeksAcademy/react-hello/blob/master/docs/DEPLOY.md).

## Other features

- Automatic Code Formatting: Use of [Prettier](https://prettier.io/) for automatic code indentation and formatting.
- Error reporting: Use of [eslint](https://eslint.org/) for better error reporting.
- Hot Deploy: Use of [Webpack Development Server](https://webpack.js.org/configuration/dev-server/) for hot deploy and live reload.
- One-command publish of the code to github pages with `npm run deploy:github`.
- Babel 7 (really fast).
