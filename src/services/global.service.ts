import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private message = 'Hello depuis GlobalService !';

  getMessage(): string {
    return this.message;
  }
}