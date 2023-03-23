import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "../entity/user";
import {Repository} from "typeorm";

@Injectable()
export class UserRepo {

    constructor(@InjectRepository(User) private readonly repo: Repository<User>) {
    }

    async getUsers() {
        return await this.repo.find();
    }

    async getUserById(id: number) {
        return await this.repo.findOne({where: {idUser: id}});
    }

    async updateUser(user: User) {
        const res = await this.repo.update({idUser: user.idUser}, user)
        return res.raw;
    }

    async createUser(user: User) {
        return await this.repo.save(user);
    }


}
