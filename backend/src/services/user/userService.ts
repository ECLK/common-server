import { getCustomRepository } from "typeorm";
import { UserRepository } from "../../repository/UserRepository";


// TODO fix return
export const getUsers = async () => {
    const userRepository = getCustomRepository(UserRepository);
    const users = userRepository.find();
    return users;
}