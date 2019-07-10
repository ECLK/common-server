import { Request, Response } from "express";
import { UserService } from "../services";
import { checkUrlSchema, checkPostDataSchema } from "./schema/User.schema";

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
            checkPostDataSchema,
            async (req: Request, res: Response) => {
                const result = await new UserService().addUser(req.body);
                res.status(201).send(result);
            }
        ]
    },
    {
        path: "/api/v1/users/:userId",
        method: "get",
        handler: [
            checkUrlSchema,
            async (req: Request, res: Response) => {
                const result = await new UserService().getUserById(req);
                if (typeof(result.id) === "undefined"){
                    res.status(404).send("User not found.");
                } else {
                    res.status(200).send(result);
                }
            }
        ]
    }
]
