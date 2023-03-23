import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Task} from "../entity/task";


@Injectable()
export class TaskRepo {

    constructor(@InjectRepository(Task) private readonly repo: Repository<Task>) {
    }

    async createTask(task: Task) {
        return await this.repo.save(task);
    }

    async getTasks() {
        return await this.repo.find();
    }

}
