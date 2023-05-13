import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GenericService } from 'src/generic/generic.service';
import { Preguntas } from './preguntas.entity';

@Injectable()
export class PreguntasService extends GenericService<Preguntas> {
  constructor(
    @InjectRepository(Preguntas)
    preguntasRepository: Repository<Preguntas>,
  ) {
    super(preguntasRepository);
  }
}

