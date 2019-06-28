import { Request, Response } from "express";
import { getUsers } from "./userService";

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
    }
]