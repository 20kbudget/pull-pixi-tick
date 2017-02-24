# pull-pixi-sprite-event
A [pull-stream][pull-stream] "[Through][Through]" that will throttle the source until a [pixi.js] [interactive sprite] event happens

## install

```
yarn add pull-pixi-sprite-event
```

## usage

```javascript
const pull = require('pull-stream')
const listen = require('pull-pixi-sprite-event')
const {Application, Text} = require('pixi.js')

const sprite = new Text('click me')
pull(
    pull.count(),
    listen(sprite, 'pointerdown'),
    pull.log()
);

const {view, stage} = new Application()
stage.addChild(sprite)
document.body.appendChild(view)
```
[pull-stream]: https://github.com/pull-stream/pull-stream
[Through]: https://github.com/pull-stream/pull-stream/blob/master/docs/throughs/index.md
[pixi.js]: http://www.pixijs.com/
[interactive sprite]: http://pixijs.download/dev/docs/PIXI.interaction.InteractionManager.html
