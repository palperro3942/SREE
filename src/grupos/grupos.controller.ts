import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { GruposService } from './grupos.service';
import { Grupos } from './grupos.entity';
import { GenericController } from 'src/generic/generic.controller';

@Controller('grupos')
export class GruposController extends GenericController<Grupos,GruposService>{
  constructor(private readonly gruposService: GruposService) {
    super(gruposService);
  }

  @Get()
  async findAll(): Promise<Grupos[]> {
    return this.gruposService.find();
  }

  @Post()
  async create(@Body() entity: Grupos){
    return this.gruposService.create(entity);
  }

  @Get('id_grupo/:id')
  async findByGrupoId(@Param('id') idGrupos: string) {
    const ids = idGrupos.split(',').map(Number);
    return this.gruposService.findByGrupoIds(ids);
  }
}
