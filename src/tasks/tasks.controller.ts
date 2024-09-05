import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  NotFoundException,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from '@prisma/client';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  async findAll() {
    return this.tasksService.getAllTask();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const taskFound = await this.tasksService.getTask(Number(id));
    if (!taskFound) throw new NotFoundException('Task does not exist');
    return taskFound;
  }

  @Post()
  async create(@Body() data: Task) {
    return this.tasksService.createTask(data);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: Task) {
    try {
      return await this.tasksService.updateTask(Number(id), data);
    } catch (error) {
      throw new NotFoundException('Task does not exist');
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.tasksService.deleteTask(Number(id));
    } catch (error) {
      throw new NotFoundException('Task does not exist');
    }
  }
}
