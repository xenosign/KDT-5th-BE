const express = require('express');

const router = express.Router();

const POSTS = [
  {
    title: 'lorem1',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quaerat excepturi nulla vel, at fugiat cumque perferendis inventore, ea, odio minus! Maxime odit vero, repellat a sed distinctio sapiente et.',
  },
  {
    title: 'lorem2',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quaerat excepturi nulla vel, at fugiat cumque perferendis inventore, ea, odio minus! Maxime odit vero, repellat a sed distinctio sapiente et.',
  },
];

router.get('/', (req, res) => {
  res.render('posts', { POSTS, postCounts: POSTS.length });
});

// localhost:4000/posts
router.post('/add', (req, res) => {
  if (Object.keys(req.body).length >= 1) {
    if (req.body.title && req.body.content) {
      const newPost = {
        title: req.body.title,
        content: req.body.content,
      };

      POSTS.push(newPost);
      res.redirect('/posts');
    } else {
      const err = new Error('폼 데이터 입력을 확인 하세요');
      err.statusCode = 400;
      throw err;
    }
  } else {
    const err = new Error('데이터가 입력 되지 않았습니다!');
    err.statusCode = 400;
    throw err;
  }
});

module.exports = router;
