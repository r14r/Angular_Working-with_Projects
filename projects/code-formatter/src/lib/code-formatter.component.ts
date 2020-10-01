import { Component, OnInit, Input, Renderer2, ElementRef } from '@angular/core';

@Component({
	selector: 'format-code',
	template: `
		<div>
			<ng-content></ng-content>
		</div>
	`,
	styles: [
		`
			div {
				padding: 20px;
				margin: 10px auto;
				box-shadow: 1px 3px 10px 1px rgba(0, 0, 0, 0.3);
				border-radius: 7px;
			}
		`,
	],
})
export class CodeFormatterComponent implements OnInit {
	@Input() color = 'rgb(42,100,250)';
	@Input() bgColor = 'rgba(0,0,30,0.9)';
	@Input() font = 'consolas, monospace';

	constructor(private renderer: Renderer2, private el: ElementRef) {}
	ngOnInit() {
		this.renderer.setStyle(
			this.el.nativeElement.firstElementChild,
			'color',
			this.color,
		);
		this.renderer.setStyle(
			this.el.nativeElement.firstElementChild,
			'backgroundColor',
			this.bgColor,
		);
		this.renderer.setStyle(
			this.el.nativeElement.firstElementChild,
			'font-family',
			this.font,
		);
	}
}
