import { CommonModule } from '@angular/common';
import { Component, effect, inject, input, model, OnDestroy, OnInit, output, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule], 
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  adminUsername = 'admin'
  adminPassword = '123456'

  isAuthenticated = output<boolean>()
  username = model<string>('')
  password = model<string>('')
  private router = inject(Router)

ngOnInit(): void {
  // if (localStorage.getItem('auth')) {
  //   this.authenticated.set(true)
  // } else {}
  // this.authenticated.set(localStorage.getItem('auth') === 'true') 
}

   eff = effect(() => {
    // if (localStorage.getItem('auth')) {
    //   this.authenticated.set(true)
    // }
   })

   login() {
    if(this.username() === this.adminUsername && this.password() === this.adminPassword) {
      localStorage.setItem('auth', 'true')
      this.isAuthenticated.emit(true)
      this.router.navigate(['/home'])
    }
   }
}
