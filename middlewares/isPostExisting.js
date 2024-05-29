const posts = require('../data/posts.json');

const isPostExisting = (req, res, next) => {

    const { slug } = request.params;

    const postToDelete = posts.find(post => post.slug === slug);
    if (!postToDelete) {
        return response.status(404).send('Il post da cancellare non è stato trovato')
    };

    req.postToDelete = postToDelete;
    next();
}


module.exports = isPostExisting;
