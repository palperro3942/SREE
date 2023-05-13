import { Body, Controller, Get, Post } from '@nestjs/common';
import { GenericController } from 'src/generic/generic.controller';
import { InventarioDeFelder } from './inventario_de_felder.entity';
import { InventarioDeFelderService } from './inventario_de_felder.service';

@Controller('inventario-de-felder')
export class InventarioDeFelderController extends GenericController<InventarioDeFelder,InventarioDeFelderService>{
    constructor(private readonly inventarioDeFelderService: InventarioDeFelderService) {
        super(inventarioDeFelderService);
    }

    @Get()
    async findAll(): Promise<InventarioDeFelder[]> {
        return this.inventarioDeFelderService.find();
    }

    @Post()
    async create(@Body() entity: InventarioDeFelder){
        return this.inventarioDeFelderService.create(entity);
    }
}
