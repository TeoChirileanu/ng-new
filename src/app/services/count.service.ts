import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountService {
  counter: number  = 1;

  emojis: string[] = [' 🐭 ', ' 🦢 ', '🙀'];

  public IncrementCounter(): void {
    this.counter++;
  }

  public IsCounterGreaterThan10(): boolean {
    return this.counter > 10;
  }
}
