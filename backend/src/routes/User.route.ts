import { Request, Response, NextFunction } from "express";
import { UserService } from "../services";
import { checkUrlSchema, checkPostDataSchema } from "./schema/User.schema";

export default [
    {
        path: "/api/v1/users",
        method: "get",
        handler: [
            async (req: Request, res: Response, next: NextFunction) => {
                return new UserService().getUsers()
                    .then((result) => res.status(200).send(result))
                    .catch(error => next(error));
            }
        ]
    },
    {
        path: "/api/v1/users",
        method: "post",
        handler: [
            checkPostDataSchema,
            async (req: Request, res: Response, next: NextFunction) => {
                return new UserService().addUser(req.body)
                    .then((result) => res.status(200).send(result))
                    .catch(error => next(error));
            }
        ]
    },
    {
        path: "/api/v1/users/:userId",
        method: "get",
        handler: [
            checkUrlSchema,
            async (req: Request, res: Response, next: NextFunction) => {
                return new UserService().getUserById(req)
                    .then((result) => res.status(200).send(result))
                    .catch(error => next(error));
            }
        ]
    }
]
