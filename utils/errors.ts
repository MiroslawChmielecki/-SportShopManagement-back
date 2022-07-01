import {NextFunction, Request, Response} from "express";

export class ValidationError extends Error {}
export class NotFoundError extends Error {}

export const handleError = (err: Error, req: Request, res: Response, next: NextFunction) => {

    if(err instanceof NotFoundError) {
        res
            .status(404)
            .json({
                message: "Nie można znaleźć elementu o danym Id !!"
            });
        return;
    }

    console.error(err);

    res
        .status(err instanceof ValidationError ? 400 : 500)
        .json({
            message: err instanceof ValidationError ? err.message : 'Przepraszamy, spróbuj ponownie za kilka chwil..'
        });
}