import { GenericEntity } from 'src/generic/generic.entity';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Preguntas extends GenericEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'number' })
  id_cuestionario: number;

  @Column({ type: 'number' })
  num_pregunta: number;

  @Column({ type: 'varchar' })
  pregunta: string;

  @Column({ type: 'varchar' })
  respuesta_1: string;

  @Column({ type: 'varchar' })
  respuesta_2: string;
}
