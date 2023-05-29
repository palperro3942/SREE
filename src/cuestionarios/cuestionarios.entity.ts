import { GenericEntity } from 'src/generic/generic.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, Index} from 'typeorm';
import { Preguntas } from '../preguntas/preguntas.entity';

@Entity()
export class Cuestionarios extends GenericEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Index() // crear el índice en la columna
  @Column({ type: 'int'})
  id_cuestionario: number;

  @Column({ type: 'int' })
  id_profesor: number;

  @Column({ type: 'varchar' })
  nombre: string;

  @Column({ type: 'varchar' })
  descripcion: string;
  
  // Relación con la entidad Preguntas
  @OneToMany(() => Preguntas, pregunta => pregunta.cuestionario)
  @JoinColumn({ name: 'id_cuestionario' })
  preguntas: Preguntas[];
}