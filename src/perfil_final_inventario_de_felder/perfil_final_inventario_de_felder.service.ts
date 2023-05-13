import { Injectable } from '@nestjs/common';
import { PerfilFinalInventarioDeFelder } from './perfil_final_inventario_de_felder.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GenericService } from 'src/generic/generic.service';

@Injectable()
export class PerfilFinalInventarioDeFelderService extends GenericService<PerfilFinalInventarioDeFelder> {
  constructor(
    @InjectRepository(PerfilFinalInventarioDeFelder)
    perfilFinalInventarioDeFelderRepository: Repository<PerfilFinalInventarioDeFelder>,
  ) {
    super(perfilFinalInventarioDeFelderRepository);
  }
}
