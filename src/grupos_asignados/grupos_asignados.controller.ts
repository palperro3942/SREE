import { Controller, Get, Post, Body } from '@nestjs/common';
import { GruposAsignadosService } from './grupos_asignados.service';
import { GruposAsignados } from './grupos_asignados.entity';
import { GenericController } from 'src/generic/generic.controller';

@Controller('grupos_asignados')
export class GruposAsignadosController extends GenericController<GruposAsignados, GruposAsignadosService>{
  constructor(private readonly gruposAsignadosService: GruposAsignadosService) {
    super(gruposAsignadosService);
  }

  @Get()
  async findAll(): Promise<GruposAsignados[]> {
    return this.gruposAsignadosService.find();
  }

  @Post()
  async create(@Body() entity: GruposAsignados){
    return this.gruposAsignadosService.create(entity);
  }
}

