import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TextMessagingService {
  send(number: string, message: string) {
    const encoded = encodeURIComponent(message);

    window.open(`https://wa.me/${number}?text=${encoded}`, '_blank');
  }
}
