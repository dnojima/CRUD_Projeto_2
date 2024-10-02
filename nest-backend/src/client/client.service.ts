import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from './client.entity/client.entity';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private clientRepository: Repository<Client>,
  ) {}

  findAll(): Promise<Client[]> {
    return this.clientRepository.find();
  }

  findOne(id: number): Promise<Client> {
    return this.clientRepository.findOne({ where: { id } });
  }

  create(client: Client): Promise<Client> {
    return this.clientRepository.save(client);
  }

  async update(id: number, client: Client): Promise<void> {
    await this.clientRepository.update(id, client);
  }

  async remove(id: number): Promise<void> {
    await this.clientRepository.delete(id);
  }
}
