const express = require('express');
const router = express.Router();
const { getData, setData } = require('./data');

router.get('/products', (req, res) => {
  const data = getData();
  res.json(data);
});

router.get('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const data = getData();
  const product = data.find(item => item.id === productId);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Producto no encontrado' });
  }
});

router.post('/products', (req, res) => {
    const newData = getData();
    const newProduct = req.body;
    newData.push(newProduct);
    setData(newData);
    res.json(newProduct);
  });
  
  router.put('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const newData = getData();
    const updatedProduct = req.body; 
    const index = newData.findIndex(item => item.id === productId);
  
    if (index !== -1) {
      newData[index] = { ...newData[index], ...updatedProduct };
      setData(newData);
      res.json(newData[index]);
    } else {
      res.status(404).json({ error: 'Producto no encontrado' });
    }
  });
  
  router.delete('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const newData = getData();
    const index = newData.findIndex(item => item.id === productId);
  
    if (index !== -1) {
      const deletedProduct = newData.splice(index, 1)[0];
      setData(newData);
      res.json(deletedProduct);
    } else {
      res.status(404).json({ error: 'Producto no encontrado' });
    }
  });
  

module.exports = router;
