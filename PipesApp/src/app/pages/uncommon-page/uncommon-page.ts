import { Component, signal } from '@angular/core';
import { Card } from '../../components/card/card';
import {
  AsyncPipe,
  I18nPluralPipe,
  I18nSelectPipe,
  JsonPipe,
  KeyValuePipe,
  SlicePipe,
} from '@angular/common';
import { interval, tap } from 'rxjs';

const client1 = {
  name: 'Adriel',
  gender: 'male',
  age: 26,
  address: 'Ottawa, Canadá',
};

const client2 = {
  name: 'Sofia',
  gender: 'female',
  age: 26,
  address: 'Toronto, Canadá',
};

@Component({
  selector: 'app-uncommon-page',
  imports: [
    Card,
    I18nSelectPipe,
    I18nPluralPipe,
    SlicePipe,
    JsonPipe,
    KeyValuePipe,
    AsyncPipe,
  ],
  templateUrl: './uncommon-page.html',
  styleUrl: './uncommon-page.css',
})
export default class UncommonPage {
  // I18nSelectPipe
  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient() {
    if (this.client() === client1) this.client.set(client2);
    else this.client.set(client1);
  }

  // I18nPluralPipe
  clientsMap = signal({
    '=0': 'no hay ningún cliente',
    '=1': 'hay un cliente',
    '=2': 'hay 2 clientes',
    other: 'hay # clientes',
  });

  clients = signal(['Maria', 'Pedro', 'Fernando', 'Melissa', 'Ariana', 'Juan']);

  deleteClient() {
    this.clients.update((prev) => prev.slice(1));
  }

  // KeyValuePipe
  profile = {
    name: 'Adriel',
    age: '26',
    address: 'Santa Fe, Argentina',
  };

  // AsyncPipe
  promiseValue1: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hay data en la promesa1. Tardó un segundo.');
    }, 1000);
  });

  promiseValue2: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hay data en la promesa2. Tardó tres segundos.');
    }, 3000);
  });

  myObservableTimer = interval(2000);
}
