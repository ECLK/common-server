import { Request } from "express";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../../repository/UserRepository";
import { User } from "../../entity/User";

export const getUsers = async () => {
    const userRepository = getCustomRepository(UserRepository);
    const users = userRepository.find();
    return users;
}

export const addUser = async (user: User) => {
    const userRepository = getCustomRepository(UserRepository);
    const result = userRepository.save(user);
    return user;
}

export const getUserById = async (req: Request) => {
    const userRepository = getCustomRepository(UserRepository);
    const userId: number = req.params.id;
    const user = userRepository.findOne({ id: userId});
    return user;
}