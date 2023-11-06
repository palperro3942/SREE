import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GenericService } from 'src/generic/generic.service';
import { EstrategiaEnsenanza } from './estrategias_enseñanza.entity';

@Injectable()
export class EstrategiaEnsenanzaService extends GenericService<EstrategiaEnsenanza> {
  constructor(
    @InjectRepository(EstrategiaEnsenanza) estrategiaEnsenanzaRepository: Repository<EstrategiaEnsenanza>
  ) {
    super(estrategiaEnsenanzaRepository);
  }
}
