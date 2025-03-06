import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-menu',
  templateUrl: './sign-in-menu.component.html',
  styleUrl: './sign-in-menu.component.css',
})
export class SignInMenuComponent {
  isSignIn: boolean = false;

  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<SignInMenuComponent>
  ) {}

  callSignIn() {
    this.isSignIn = true;
    this.router.navigate(['signIn']);
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close();
  }

  callRegisterUser() {
    this.closeDialog();
  }
}
