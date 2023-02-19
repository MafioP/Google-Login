import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent {
	name: any;
	constructor(private route: ActivatedRoute) {}

	ngOnInit() {
		this.route.queryParams.subscribe(params => {
			this.name = params['name'];
		});
	}
}
