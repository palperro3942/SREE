import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GruposAsignados } from './grupos_asignados.entity';
import { GenericService } from 'src/generic/generic.service';

@Injectable()
export class GruposAsignadosService extends GenericService <GruposAsignados>{
  constructor(
    @InjectRepository(GruposAsignados) gruposAsignadosRepository: Repository<GruposAsignados>) {
      super(gruposAsignadosRepository);
    }
}

