import { Request, Response } from "express";
import { UserService } from "../services";
import { checkUrlSchema } from "./schema/User.schema";

export default [
    {
        path: "/api/v1/users",
        method: "get",
        handler: [
            async (req: Request, res: Response) => {
                const result = await new UserService().getUsers();
                res.status(200).send(result);
            }
        ]
    },
    {
        path: "/api/v1/users",
        method: "post",
        handler: [
            async (req: Request, res: Response) => {
                const result = await new UserService().addUser(req.body);
                res.status(201).send(result);
            }
        ]
    },
    {
        path: "/api/v1/users/:id",
        method: "get",
        handler: [
            checkUrlSchema,
            async (req: Request, res: Response) => {
                const result = await new UserService().getUserById(req);
                res.status(200).send(result);
            }
        ]
    }
]
