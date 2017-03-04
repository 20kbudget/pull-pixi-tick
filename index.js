module.exports = ticker => read => (abort, cb) => read(abort, (end, data) => {
    if (end) {
        return cb(end, data);
    }
    const listener = () => {
        ticker.remove(listener);
        cb(end, data);
    };
    ticker.add(listener);
});
