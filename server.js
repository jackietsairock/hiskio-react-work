const express = require('express');
const lessons = require('./src/lessons.json');

const app = express();
const PORT = 3001;
app.listen(PORT, () =>
  console.log(`server started at ${PORT}`),
);

app.get('/api/lessons', (req, res) => {
  const { filter = '' } = req.query;

  if (!filter) {
    res.json(lessons);
  } else {
    res.json(
      lessons.filter(({ title }) =>
        title.toLowerCase().includes(filter.toLowerCase()),
      ),
    );
  }
});
