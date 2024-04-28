import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-async-pipe-demo',
  templateUrl: './async-pipe-demo.component.html',
  styleUrls: ['./async-pipe-demo.component.scss']
})
export class AsyncPipeDemoComponent {

  public currentTime = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });

}
