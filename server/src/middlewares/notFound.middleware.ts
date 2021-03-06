import { Request, Response, NextFunction } from 'express';

// Utils
import { apiResponse, failedResponse } from 'utils/response.util';

export const notFoundHandler = (request: Request, response: Response, next: NextFunction) => {
    const message = 'Resource NOT FOUND';
    return apiResponse(response, failedResponse(message), 404);
};
