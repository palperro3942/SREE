import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PerfilFinalInventarioDeFelder } from './perfil_final_inventario_de_felder.entity';
import { PerfilFinalInventarioDeFelderController } from './perfil_final_inventario_de_felder.controller';
import { PerfilFinalInventarioDeFelderService } from './perfil_final_inventario_de_felder.service';

@Module({
  imports: [TypeOrmModule.forFeature([PerfilFinalInventarioDeFelder])],
  controllers: [PerfilFinalInventarioDeFelderController],
  providers: [PerfilFinalInventarioDeFelderService],
})
export class PerfilFinalInventarioDeFelderModule {}

