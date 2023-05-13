import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Grupos } from './grupos.entity';
import { GenericService } from 'src/generic/generic.service';

@Injectable()
export class GruposService extends GenericService<Grupos>{
  constructor(
    @InjectRepository(Grupos) gruposRepository: Repository<Grupos>) {
      super(gruposRepository);
    }
}

