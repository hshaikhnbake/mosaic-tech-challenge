const { Router, response } = require('express');
const axios = require('axios');

const router = Router();
const { sortValues, directionValues } = require('./schema')

router.get('/ping', (req, res) => {
  res.status(200).send({
    success:'true',
  })
});

const url = `http://hatchways.io/api/assessment/blog/posts`


router.get('/posts/:tags/:sortBy?/:direction?', (req, res) => {
  const { tags, sortBy, direction } = req.params

  let multipleTags = tags.split(',');
  
  if (directionValues.indexOf(direction) === -1) return res.status(400).send({ error: 'sortBy parameter is invalid'});
  if (sortValues.indexOf(sortBy) === - 1) return res.status(400).send({ error: 'sortBy parameter is invalid' })

  if (typeof multipleTags[1] === 'string') {

    const multipleCalls = multipleTags.map((tag, i) => {
      return axios.get(url, { params: { tag: tag, sortBy: sortBy, direction: direction } })
    });

    axios.all(multipleCalls)
      .then(function (results) {
        let rawData = results.map(r => r.data.posts);
        let data = rawData.flat()
        let ids = data.map(o => o.id)
        let filtered = data.filter(({ id }, index) => !ids.includes(id, index + 1))
        if (sortBy) {
          if (direction === 'desc') {
            filtered = filtered.sort((a, b) => (b[sortBy] > a[sortBy]) ? 1 : -1);
          } else {
            filtered = filtered.sort((a, b) => (b[sortBy] < a[sortBy]) ? 1 : -1);
          }
        }
        res.status(200).send(filtered)
    })
  } 
  
  else {
    axios.get(url, { params: { tag: tags, sortBy: sortBy, direction: direction } })
    .then((response) => {
      let data = (response.data.posts)
      let ids = data.map(o => o.id)
      let filtered = data.filter(({ id }, index) => !ids.includes(id, index + 1))
      if (sortBy) {
        if (direction === 'desc') {
          filtered = filtered.sort((a, b) => (b[sortBy] > a[sortBy]) ? 1 : -1);
        } else {
          filtered = filtered.sort((a, b) => (b[sortBy] < a[sortBy]) ? 1 : -1);
        }
      }
      res.status(200).send(filtered)
    })}

});


module.exports = router;