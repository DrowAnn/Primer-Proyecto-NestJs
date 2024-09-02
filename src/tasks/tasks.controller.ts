import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
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

  @Get('/tasks')
  mostrarTodos() {
    return this.taskService.getAll();
  }

  @Post('/tasks')
  crearTarea() {
    return 'Creando Tarea';
  }

  @Put('/tasks')
  actualizarTarea() {
    return 'Actualizando Tarea';
  }

  @Patch('/tasks')
  actualizarParteDeTarea() {
    return 'Actualizando Status';
  }

  @Delete('/tasks')
  borrarTarea() {
    return 'Borrando Tarea';
  }
}
