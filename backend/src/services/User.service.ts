import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repository/UserRepository";
import { User } from "../entity/User";
import { HTTP404Error } from "../utils/httpErrors";

export class UserService {
    private userRepository: UserRepository;

    constructor(){
        this.userRepository = getCustomRepository(UserRepository);
    }

    public async getUsers() {
        const userList = this.userRepository.find();
        return userList;
    }

    public async addUser(user: User) {
        const result = this.userRepository.save(user);
        return user;
    }

    public async getUserById(req: Request){
        const userId: number = req.params.userId;
        const user = await this.userRepository.findOneOrFail({ 
            id: userId
        }).catch( err => {
            return err;
        });
        return user;
    }

}