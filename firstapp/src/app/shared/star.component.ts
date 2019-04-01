import { Component, OnChanges, OnInit,
         OnDestroy, Input,
        Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnInit, OnChanges, OnDestroy {

    @Input() rating;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
    constructor() {
        console.log('>>in constructor');
    }

    ngOnChanges() {
        console.log('>>in onChanges');
        this.starWidth = this.rating * 86 / 6;
    }

    ngOnInit() {
        console.log('>>in oninit');
    }

    ngOnDestroy() {
        console.log('>>in ondestroy');
    }

    onStar(): void {
        this.ratingClicked.emit(`Rating clicked is ${this.rating}`);
    }
}
