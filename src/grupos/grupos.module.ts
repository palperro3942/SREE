import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Grupos } from './grupos.entity';
import { GruposController } from './grupos.controller';
import { GruposService } from './grupos.service';

@Module({
  imports: [TypeOrmModule.forFeature([Grupos])],
  controllers: [GruposController],
  providers: [GruposService],
})
export class GruposModule {}

