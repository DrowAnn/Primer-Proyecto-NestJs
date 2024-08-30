import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller({})
export class TaskController {
  taskService: TasksService;

  constructor(taskServive: TasksService) {
    this.taskService = taskServive;
  }

  @Get('/')
  hello() {
    return 'Pruebas';
  }

  @Get('/servicios')
  mostrarTodos() {
    return this.taskService.getAll();
  }
}
