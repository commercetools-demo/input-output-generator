import { Router } from 'express';
import { getProducts } from '../entities/product';

const serviceRouter = Router();

serviceRouter.get('/:entity', async (req, res) => {
  let result = {};
  switch (req.params.entity.toLowerCase()) {
    case 'product':
      result = await getProducts();
      break;
  
    default:
      break;
  }
  

  res.statusCode = 200;
  res.json(result);
});



export default serviceRouter;
