import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-view1',
    templateUrl: './view1.component.html',
    styleUrls: ['./view1.component.css']
})
export class View1Component implements OnInit {
    title = 'App1: View 1';

    constructor() {}

    ngOnInit() {}
}