import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repository/UserRepository";
import { User } from "../entity/User";
import { HTTP404Error, HTTP500Error } from "../utils/httpErrors";

export class UserService {
    private userRepository: UserRepository;

    constructor(){
        this.userRepository = getCustomRepository(UserRepository);
    }

    public async getUsers() {
        try {
            const userList = this.userRepository.find();
            return userList;
        } catch (error) {
            throw new HTTP404Error("Users not found")
        }
    }

    public async addUser(user: User) {
        try {
            const result = await this.userRepository.save(user);
            return result;
        } catch (error) {
            throw new HTTP500Error();
        }
    }

    public async getUserById(req: Request){
        try {
            const userId: number = req.params.userId;
            const user = await this.userRepository.findOneOrFail({ id: userId});
            return user;
        } catch (error) {
            throw new HTTP404Error("User not found");
        }
    }

}