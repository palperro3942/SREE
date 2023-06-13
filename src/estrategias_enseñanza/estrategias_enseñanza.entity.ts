import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { PerfilFinalInventarioDeFelder } from 'src/perfil_final_inventario_de_felder/perfil_final_inventario_de_felder.entity';
import { GenericEntity } from 'src/generic/generic.entity';

@Entity()
export class EstrategiaEnsenanza extends GenericEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column({type: 'text'})
  descripcion: string;

  @OneToMany(() => PerfilFinalInventarioDeFelder, perfilfinal => perfilfinal.ee1)
  perfilesFinalesEE1: PerfilFinalInventarioDeFelder[];

  @OneToMany(() => PerfilFinalInventarioDeFelder, perfilfinal => perfilfinal.ee2)
  perfilesFinalesEE2: PerfilFinalInventarioDeFelder[];

  @OneToMany(() => PerfilFinalInventarioDeFelder, perfilfinal => perfilfinal.ee3)
  perfilesFinalesEE3: PerfilFinalInventarioDeFelder[];

  @OneToMany(() => PerfilFinalInventarioDeFelder, perfilfinal => perfilfinal.ee4)
  perfilesFinalesEE4: PerfilFinalInventarioDeFelder[];
  static createQueryBuilder: any;
}
