import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private url = 'http://localhost:3000/';
  private socket = io.connect(this.url);

  constructor() { }

  public sendClick(coordinates) {
    this.socket.emit('click', coordinates);
  }

  public sendKeysEvent(eventInfo) {
    this.socket.emit('keyPress', eventInfo);
  }

  public sendSelectEvent(eventInfo) {
    this.socket.emit('selectChange', eventInfo);
  }

  public getClickEvent() {
    const eventObservable = new Observable(observer => {
      this.socket.on('mouseClick', (data) => {
        observer.next(data);
      });

      return () => {
        this.socket.disconnect();
      };
    });

    return eventObservable.pipe(debounceTime(50)); // debounce for prevent doubleclick
  }                                                // bug of label

  public getKeyEvent() {
    const eventObservable = new Observable(observer => {
      this.socket.on('newKeyPress', (data) => {
        observer.next(data);
      });

      return () => {
        this.socket.disconnect();
      };
    });

    return eventObservable;
  }

  public getSelectEvent() {
    const eventObservable = new Observable(observer => {
      this.socket.on('newSelect', (data) => {
        observer.next(data);
      });

      return () => {
        this.socket.disconnect();
      };
    });

    return eventObservable;
  }
}
