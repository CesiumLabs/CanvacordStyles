# @canvacord/stylesheet
Stylesheet builder for canvacord.

# Installation

```sh
$ npm i @canvacord/stylesheet
```

# Example

```js
const Stylesheet = require("@canvacord/stylesheet");
const stylesheet = new Stylesheet.Rank({ overwrite: true });

stylesheet.create({
    avatar: {
        rounded: true
    }
});

console.log(stylesheet.toJSON());

/*
{ name: 'RANK', styles: { avatar: { rounded: true } } }
*/
```