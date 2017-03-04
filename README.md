# pull-pixi-tick
A [pull-stream][pull-stream] "[Through][Through]" that will throttle the source until the next tick of a  [pixi.js][pixi.js] ticker.

## install

```
yarn add pull-pixi-tick
```

## usage

```javascript
const pull = require('pull-stream')
const tickThrough = require('pull-pixi-tick')
const {Application} = require('pixi.js')

const {view, ticker} = new Application()
document.body.appendChild(view)

pull(
    pull.count(1000),
    tickThrough(ticker),
    pull.log()
);

```
[pull-stream]: https://github.com/pull-stream/pull-stream
[Through]: https://github.com/pull-stream/pull-stream/blob/master/docs/throughs/index.md
[pixi.js]: http://www.pixijs.com/

