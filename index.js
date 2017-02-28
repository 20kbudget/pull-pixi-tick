const listen = (sprite, eventName) => read => (abort, cb) => read(abort, (
    end,
    data
) => {
    sprite.interactive = end ? false : true;
    if (end) {
        return cb(end, data);
    }
    sprite.on(eventName, event => {
        sprite.off(eventName);
        cb(end, data);
    });
});

module.exports = listen;
