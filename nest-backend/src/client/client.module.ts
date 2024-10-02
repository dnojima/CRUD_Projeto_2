import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { Client } from './client.entity/client.entity'; // Importando a entidade

@Module({
  imports: [TypeOrmModule.forFeature([Client])], // Registrando a entidade
  providers: [ClientService],
  controllers: [ClientController],
})
export class ClientModule {}
