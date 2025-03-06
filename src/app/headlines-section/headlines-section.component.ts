import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-headlines-section',
  templateUrl: './headlines-section.component.html',
  styleUrl: './headlines-section.component.css',
})
export class HeadlinesSectionComponent {
  isSignIn: boolean = true;

  // constructor(private route: ActivatedRoute) {}
  // isSignIn: boolean = false;
  // ngOnInit(): void {
  //   this.route.queryParams.subscribe((params) => {
  //     this.isSignIn = params['isSignIn'];
  //   });
  //   console.log(' sign is ', this.isSignIn);
  // }
}
