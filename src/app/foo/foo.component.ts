import { Component} from '@angular/core';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent {

  counter: number  = 0;

  emojis: string[] = [' 🐭 ', ' 🦢 ', '🙀'];

  public IncrementCounter(): void {
    this.counter++;
  }

  public IsCounterGreaterThan10(): boolean {
    return this.counter > 10;
  }

}
