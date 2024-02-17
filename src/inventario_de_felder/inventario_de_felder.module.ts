import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventarioDeFelder } from './inventario_de_felder.entity';
import { InventarioDeFelderService } from './inventario_de_felder.service';
import { InventarioDeFelderController } from './inventario_de_felder.controller';
import { PerfilFinalInventarioDeFelder } from 'src/perfil_final_inventario_de_felder/perfil_final_inventario_de_felder.entity';
import { GruposService } from 'src/grupos/grupos.service';
import { Grupos } from 'src/grupos/grupos.entity';

@Module({
    imports: [TypeOrmModule.forFeature([InventarioDeFelder, PerfilFinalInventarioDeFelder, Grupos])],
    providers: [InventarioDeFelderService, GruposService],
    controllers: [InventarioDeFelderController]
})
export class InventarioDeFelderModule {}
