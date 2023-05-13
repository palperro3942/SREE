import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventarioDeFelder } from './inventario_de_felder.entity';
import { InventarioDeFelderService } from './inventario_de_felder.service';
import { InventarioDeFelderController } from './inventario_de_felder.controller';

@Module({
    imports: [TypeOrmModule.forFeature([InventarioDeFelder])],
    providers: [InventarioDeFelderService],
    controllers: [InventarioDeFelderController]
})
export class InventarioDeFelderModule {}
