import { GenericEntity } from 'src/generic/generic.entity';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Grupos extends GenericEntity{
  @PrimaryGeneratedColumn()
  id_grupo: number;

  @Column({ type: 'number' })
  grupo: number;

  @Column({ type: 'string' })
  id_carrera: string;
}
