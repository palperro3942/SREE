import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Alumnos } from './alumnos.entity';
import { GenericService } from 'src/generic/generic.service';

@Injectable()
export class AlumnosService extends GenericService<Alumnos> {
  constructor(
    @InjectRepository(Alumnos) alumnosRepository: Repository<Alumnos>) {
      super(alumnosRepository)
    }
}
