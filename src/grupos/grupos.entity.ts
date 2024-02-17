import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Carreras } from '../carreras/carreras.entity';
import { GenericEntity } from 'src/generic/generic.entity';
import { EstrategiaEnsenanza } from '../estrategias_enseñanza/estrategias_enseñanza.entity';
import { Cuestionarios } from 'src/cuestionarios/cuestionarios.entity';

@Entity()
export class Grupos extends GenericEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  id_grupo: number;

  @Column({ type: 'int' })
  grupo: number;

  @Column({ type: 'varchar' })
  id_carrera: string;

  // Relación con la entidad Cuestionario
  @ManyToOne(() => Cuestionarios, cuestionario => cuestionario.grupos, { eager: true })
  @JoinColumn({ name: 'id_cuestionario', referencedColumnName: 'id' })
  cuestionario: Cuestionarios;

  // Relación con la entidad Carreras
  @ManyToOne(() => Carreras, carrera => carrera.grupos)
  @JoinColumn({ name: 'id_carrera', referencedColumnName: 'id_carrera' })
  carrera: Carreras;

  // Relaciones con las estrategias de enseñanza
  @ManyToOne(() => EstrategiaEnsenanza, { eager: true })
  @JoinColumn({ name: 'ee1', referencedColumnName: 'id' })
  ee1: Partial<EstrategiaEnsenanza>;

  @ManyToOne(() => EstrategiaEnsenanza, { eager: true })
  @JoinColumn({ name: 'ee2', referencedColumnName: 'id' })
  ee2: Partial<EstrategiaEnsenanza>;

  @ManyToOne(() => EstrategiaEnsenanza, { eager: true })
  @JoinColumn({ name: 'ee3', referencedColumnName: 'id' })
  ee3: Partial<EstrategiaEnsenanza>;

  @ManyToOne(() => EstrategiaEnsenanza, { eager: true })
  @JoinColumn({ name: 'ee4', referencedColumnName: 'id' })
  ee4: Partial<EstrategiaEnsenanza>;

  // Actualizacion para el conteo de alumnos pensando en los reportes
  // Oficial developer profile https://github.com/palperro3942
  // Columnas de conteo de estrategias
  @Column({ default: 0 })
  ce1: number;

  @Column({ default: 0 })
  ce2: number;

  @Column({ default: 0 })
  ce3: number;

  @Column({ default: 0 })
  ce4: number;

  @Column({ default: 0 })
  ce5: number;

  @Column({ default: 0 })
  ce6: number;

  @Column({ default: 0 })
  ce7: number;

  @Column({ default: 0 })
  ce8: number;
}