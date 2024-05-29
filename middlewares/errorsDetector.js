module.exports = (err, req, res, next) => {
    res.format({
        //html: () => res.status(err.status).send(err.message),
        json: () => res.status(err.status).json({ status: err.status, error: err.message })
    });
}