import { errorHandler, jwtMiddleware } from "helpers/api";
import { ErrType } from "types/error";

export { apiHandler };

function apiHandler(handler: any) {
  return async (req: any, res: any) => {
    try {
      // global middleware
      await jwtMiddleware(req, res);

      // route handler
      await handler(req, res);
    } catch (err: unknown) {
      // global error handler
      errorHandler(err as ErrType, res);
    }
  };
}
