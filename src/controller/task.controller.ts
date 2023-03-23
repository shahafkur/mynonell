import {Body, Controller, Get, Post} from "@nestjs/common";
import {AppService} from "../app.service";
import {TaskRepo} from "../repo/task.repo";
import {Task} from "../entity/task";

@Controller()
export class TaskController {
    constructor(private readonly taskRepo: TaskRepo) {}

    @Post("createTask")
    async createTask(@Body() task: Task) {
        return await this.taskRepo.createTask(task)
    }

    @Get("getTasks")
    async getTasks() {
        return this.taskRepo.getTasks();
    }


}
