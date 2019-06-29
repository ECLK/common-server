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