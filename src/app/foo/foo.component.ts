import { Component} from '@angular/core';
import {CountService} from "../services/count.service";

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent {

 constructor(public countService: CountService) {
 }

}
