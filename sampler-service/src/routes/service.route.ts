import { Router } from 'express';
import { getProducts, getOrders, getPayments } from '../entities';

const serviceRouter = Router();

serviceRouter.post('/:entity', async (req, res) => {
  let result = {};
  switch (req.params.entity.toLowerCase()) {
    case 'products':
      result = await getProducts(req.body);
      break;
    case 'orders':
      result = await getOrders(req.body);
      break;
    case 'payments':
      result = await getPayments(req.body);
      break;

    default:
      break;
  }

  res.statusCode = 200;
  res.json(result);
});

export default serviceRouter;
