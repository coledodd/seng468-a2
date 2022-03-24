const express = require('express');
const app = express();

const redisClient = require('./redis-client');

app.get('/place_order/:user/:item', async (req, res) => {
  const user = req.params['user'];
  const item = req.params['item'];
  const date = Date.now()
  const value = JSON.stringify({'user': user, 'item': item, 'date': date});
  await redisClient.zaddAsync('orders', date, value);
  return res.send('Sucess ' + value + '\n');
});

app.get('/', async (req, res) => {
  const rawData = await redisClient.zrangeAsync('orders', 0, -1);
  let data = rawData.toString();
  // data = data.replace("},{", "}${").split('$');
  // let str = '';
  // data.forEach(e => {str += JSON.parse(e);});
  return res.send('Sucess ' + data + '\n');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
