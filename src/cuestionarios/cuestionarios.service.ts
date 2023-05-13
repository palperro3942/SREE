import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cuestionarios } from './cuestionarios.entity';
import { GenericService } from 'src/generic/generic.service';

@Injectable()
export class CuestionariosService extends GenericService<Cuestionarios>{
  constructor(
    @InjectRepository(Cuestionarios) cuestionariosRepository: Repository<Cuestionarios>) {
      super(cuestionariosRepository)
    }
}
