import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para usar *ngIf, *ngFor, etc.
import { FormsModule } from '@angular/forms'; // Para usar [(ngModel)]

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'],
  standalone: true, // Tornando o componente standalone
  imports: [CommonModule, FormsModule] // Importando os módulos necessários
})

export class ClientListComponent {
  clients = JSON.parse(localStorage.getItem('db_client') || '[]');
  client = { nome: '', email: '', celular: '', cidade: '' };
  modalActive = false;
  isEditing = false;
  editIndex: number | null = null;

  openModal() {
    this.modalActive = true;
    this.isEditing = false;
    this.client = { nome: '', email: '', celular: '', cidade: '' };
  }

  closeModal() {
    this.modalActive = false;
  }

  saveClient() {
    if (this.isEditing && this.editIndex !== null) {
      this.clients[this.editIndex] = this.client;
    } else {
      this.clients.push(this.client);
    }
    localStorage.setItem('db_client', JSON.stringify(this.clients));
    this.closeModal();
  }

  editClient(index: number) {
    this.client = { ...this.clients[index] };
    this.isEditing = true;
    this.modalActive = true;
    this.editIndex = index;
  }

  deleteClient(index: number) {
    this.clients.splice(index, 1);
    localStorage.setItem('db_client', JSON.stringify(this.clients));
  }
}
