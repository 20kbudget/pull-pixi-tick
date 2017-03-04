const through = ticker => read => (abort, cb) => read(abort, (end, data) => {
    if (end) {
        return cb(end, data);
    }
    const listener = () => {
        ticker.remove(listener);
        cb(end, data);
    };
    ticker.add(listener);
});

const source = ticker => (end, cb) => {
    if (end) {
        return cb && cb(end);
    }
    const listener = deltaTime => {
        ticker.remove(listener);
        cb(null, deltaTime);
    };
    ticker.add(listener);
};

module.exports = { through: through, source: source };
