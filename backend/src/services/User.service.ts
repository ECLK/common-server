import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repository/UserRepository";
import { User } from "../entity/User";

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
        const userId: number = req.params.id;
        const user = this.userRepository.findOne({ id: userId});
        return user;
    }

}