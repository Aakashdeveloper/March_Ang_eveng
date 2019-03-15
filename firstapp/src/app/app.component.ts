import { Component } from '@angular/core';

@Component({
    selector: 'app-main',
    templateUrl: './app.component.html'
})

export class AppComponent {
    title: String = '***Home Page***';
    marks: Number = 10;
}



/*
template: `<h1>This is my firstcomponent</h1>
                <app-book></app-book>`*/
