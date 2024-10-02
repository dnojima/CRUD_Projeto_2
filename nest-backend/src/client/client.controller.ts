import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ClientService } from './client.service';
import { Client } from './client.entity/client.entity';

@Controller('clients')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get()
  findAll() {
    return this.clientService.findAll();
  }

  @Post()
  create(@Body() client: Client) {
    return this.clientService.create(client);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() client: Client) {
    return this.clientService.update(id, client);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.clientService.remove(id);
  }
}
