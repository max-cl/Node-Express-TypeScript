import { Request, Response, NextFunction } from 'express';
import passport from 'passport';

// Services
import { BudgetService } from 'services/budget.service';

// Utils
import { apiResponse, successResponse, failedResponse } from 'utils/response';
import { logger } from 'utils/logger.util';

export class BudgetController {
    constructor(private budgetService: BudgetService) {}

    public createBudget = async (req: Request, res: Response, next: NextFunction): Promise<Response> =>
        passport.authenticate('jwt', { session: false }, async (err, user, info) => {
            if (err) {
                logger.error(err);
                return apiResponse(res, failedResponse(err), 500);
            }
            if (info !== undefined) {
                logger.error(info.message);
                return apiResponse(res, failedResponse(info.message), 401);
            }
            if (parseInt(user.user_id) === parseInt(req.body.user_id)) {
                try {
                    const { amount, budget_date, user_id } = req.body;
                    await this.budgetService.createNewBudget(amount, budget_date, user_id);

                    logger.info(`New Budget already added!`);
                    return apiResponse(res, successResponse({ message: 'New Budget has been added successfully' }), 201);
                } catch (error) {
                    logger.error('[Error] Create a new Budget: ', { meta: { ...error } });
                    return apiResponse(res, failedResponse(error), 400);
                }
            }
            logger.error('username and jwt token do not match');
            return apiResponse(res, failedResponse('username and jwt token do not match'), 403);
        })(req, res, next);
}
