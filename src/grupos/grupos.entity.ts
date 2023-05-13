import { GenericEntity } from 'src/generic/generic.entity';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Grupos extends GenericEntity{
  @Column()
  id_grupo: number;

  @Column({ type: 'int' })
  grupo: number;

  @Column({ type: 'varchar' })
  id_carrera: string;
}
