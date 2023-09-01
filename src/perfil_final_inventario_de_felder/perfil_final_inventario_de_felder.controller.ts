import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { GenericController } from 'src/generic/generic.controller';
import { PerfilFinalInventarioDeFelder } from './perfil_final_inventario_de_felder.entity';
import { PerfilFinalInventarioDeFelderService } from './perfil_final_inventario_de_felder.service';

@Controller('perfil-final-inventario-de-felder')
export class PerfilFinalInventarioDeFelderController extends GenericController<PerfilFinalInventarioDeFelder, PerfilFinalInventarioDeFelderService> {
  constructor(private readonly perfilFinalInventarioDeFelderService: PerfilFinalInventarioDeFelderService) {
    super(perfilFinalInventarioDeFelderService);
  }

  @Get()
  async findAll(): Promise<PerfilFinalInventarioDeFelder[]> {
    return this.perfilFinalInventarioDeFelderService.find();
  }

  @Post()
  async create(@Body() entity: PerfilFinalInventarioDeFelder) {
    return this.perfilFinalInventarioDeFelderService.create(entity);
  }

  @Get('id_grupo/:id')
  async findByGrupoId(@Param('id') idGrupos: string) {
    const ids = idGrupos.split(',').map(Number);
    return this.perfilFinalInventarioDeFelderService.findByGrupoIds(ids);
  }
}
