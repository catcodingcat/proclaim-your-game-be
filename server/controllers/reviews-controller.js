const { selectReviewById, updateReviewVotes, selectReviews } = require("../models/reviews-model");

exports.getReviewById = (req, res, next) => {
    const { review_id } = req.params;
    selectReviewById(review_id)
    .then((review) => {
        res.status(200).send({ review });
    })
    .catch(next);
};

exports.patchReviewVotes = (req, res, next) => {
    const { review_id } = req.params;
    const update = req.body;
    updateReviewVotes(review_id, update)
    .then((review) => {
        res.status(200).send({review});
    })
    .catch(next);
}

exports.getReviews = (req, res, next) => {
    const { sort_by, order, category, limit, p } = req.query;
    selectReviews(sort_by, order, category, limit, p)
    .then((result) => {
        res.status(200).send(result);
    })
    .catch(next);
};