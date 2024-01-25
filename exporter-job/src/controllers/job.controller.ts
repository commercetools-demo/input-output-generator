import { Request, Response } from 'express';
import CustomError from '../errors/custom.error';
import { reader } from '../configuration-reader';
import { exportProducts, exportOrders, exportPayments } from '../entities';
import { logger } from '../utils/logger.utils';

/**
 * Exposed job endpoint.
 *
 * @param {Request} _request The express request
 * @param {Response} response The express response
 * @returns
 */
export const post = async (_request: Request, response: Response) => {
  try {
    const config = await reader();
    switch (config.entity) {
      case 'products':
        await exportProducts(config);
        break;
      case 'orders':
        await exportOrders(config);
        break;
      case 'payments':
        await exportPayments(config);
        break;
      default:
        logger.warn('No entity');
    }


    response.status(200).send();
  } catch (error) {
    throw new CustomError(
      500,
      `Internal Server Error`
    );
  }
};
