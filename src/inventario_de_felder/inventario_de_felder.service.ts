import { Injectable } from '@nestjs/common';
import { InventarioDeFelder } from './inventario_de_felder.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GenericService } from 'src/generic/generic.service';

@Injectable()
export class InventarioDeFelderService extends GenericService<InventarioDeFelder>{
    constructor(@InjectRepository(InventarioDeFelder) InventarioDeFelderRepository: Repository<InventarioDeFelder>){
        super(InventarioDeFelderRepository);
    }
}
