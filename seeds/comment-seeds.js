const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'This is pretty cool',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'That is great news!',
    user_id: 6,
    post_id: 2
  },
  {
    comment_text: 'That is awesome!',
    user_id: 3,
    post_id: 1
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
