import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  message = 'Hello World from client';

  constructor(private dataService: DataService) { }

  getMessages(): void {
    this.dataService.getMessage().then(message => {
      this.message = message && message;
    });
  }

  ngOnInit(): void {
    this.getMessages();
  }
}
