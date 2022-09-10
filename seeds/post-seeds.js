const { Post } = require('../models');

const postdata = [
  {
    title: 'New app',
    post_message: 'Posting this message',
    user_id: 2
  },
  {
    title: 'Run BUddy',
    post_message: 'Run buddy has reached 2 million followers',
    user_id: 4
  },
  {
    title: 'Smart Pot',
    post_message: 'Smart pot has now launched a user profile.',
    user_id: 1
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
