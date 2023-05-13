import { Module } from '@nestjs/common';
import { GruposAsignadosService } from './grupos_asignados.service';
import { GruposAsignadosController } from './grupos_asignados.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Grupos } from 'src/grupos/grupos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Grupos])],
  providers: [GruposAsignadosService],
  controllers: [GruposAsignadosController]
})
export class GruposAsignadosModule {}
