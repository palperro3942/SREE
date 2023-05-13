import { Controller, Body, Get, Post } from '@nestjs/common';
import { AlumnosService } from './alumnos.service';
import { Alumnos } from './alumnos.entity';
import { GenericController } from 'src/generic/generic.controller';

@Controller('alumnos')
export class AlumnosController extends GenericController<Alumnos,AlumnosService>{
  constructor(private readonly alumnosService: AlumnosService) {
    super(alumnosService);
  }

  @Get()
  async findAll(): Promise<Alumnos[]> {
    return this.alumnosService.find();
  }

  @Post()
  async create(@Body() entity: Alumnos) {
    return this.alumnosService.create(entity);
  }
}

