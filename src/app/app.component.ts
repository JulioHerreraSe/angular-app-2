import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from "./counter/counter.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{ 
  
  title: string = 'Hola mundo angular!';

  subTitle: string = 'Contador con estado de sesion';

  users: string[] = ['Pepe', 'Maria', 'Juan', 'Julio'];

  visible: boolean = false;

  counter: number = 0;

  setVisible():void {
    this.visible = this.visible? false: true;
  }

  ngOnInit(): void {
    this.counter= parseInt(sessionStorage.getItem('counter')!) || 0;
  }

  setCounter(counter:number):void {
    this.counter = counter;
  }

}
