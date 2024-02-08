import { Router } from 'express';

import { post } from '../controllers/job.controller';
import { logger } from '../utils/logger.utils';

// Create the router for our app
const jobRouter: Router = Router();

jobRouter.post('/', async (req, res, next) => {
  logger.info('Job started');
  try {
    await post(req, res);
    next();
  } catch (error) {
    next(error);
  }
});

export default jobRouter;
