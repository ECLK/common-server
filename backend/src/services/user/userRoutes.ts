import { Request, Response } from "express";
import { getUsers, addUser } from "./userService";

export default [
    {
        path: "/api/v1/users",
        method: "get",
        handler: [
            async (req: Request, res: Response) => {
                const result = await getUsers();
                res.status(200).send(result);
            }
        ]
    },
    {
        path: "/api/v1/users",
        method: "post",
        handler: [
            async (req: Request, res: Response) => {
                const result = await addUser(req.body);
                res.status(200).send(result);
            }
        ]
    }
]