import { Injectable } from '@nestjs/common';
import { PerfilFinalInventarioDeFelder } from './perfil_final_inventario_de_felder.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { GenericService } from 'src/generic/generic.service';

@Injectable()
export class PerfilFinalInventarioDeFelderService extends GenericService<PerfilFinalInventarioDeFelder> {
  constructor(
    @InjectRepository(PerfilFinalInventarioDeFelder)
    private readonly perfilFinalInventarioDeFelderRepository: Repository<PerfilFinalInventarioDeFelder>,
  ) {
    super(perfilFinalInventarioDeFelderRepository);
  }

  async findByGrupoIds(ids: number[]): Promise<PerfilFinalInventarioDeFelder[]> {
    return this.perfilFinalInventarioDeFelderRepository.find({ where: { grupo: In(ids) } });
  }
}
