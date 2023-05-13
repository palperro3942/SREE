import { GenericEntity } from 'src/generic/generic.entity';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class GruposAsignados extends GenericEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'number' })
  id_profesor: number;

  @Column({ type: 'number' })
  id_grupo: number;
}
