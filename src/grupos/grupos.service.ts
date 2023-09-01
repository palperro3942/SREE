import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Grupos } from './grupos.entity';
import { GenericService } from 'src/generic/generic.service';

@Injectable()
export class GruposService extends GenericService<Grupos>{
  constructor(
    @InjectRepository(Grupos) private readonly gruposRepository: Repository<Grupos>) {
      super(gruposRepository);
    }

    async findByGrupoIds(ids: number[]): Promise<Grupos[]> {
      return this.gruposRepository.find({ where: { id_grupo: In(ids) } });
    }
}

