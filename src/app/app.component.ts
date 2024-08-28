import { Component, inject, input, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet, Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './statistics/statistics.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, HomeComponent, AboutComponent, StatisticsComponent, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'ITMS';
  private router = inject(Router)
  userAuthenticated = signal(false)

  public goToLogin() {
    console.log('test')
    this.router.navigate(['/login'])
  }

  isAuthenticated(value: boolean) {
    console.log('VALYE', value)
this.userAuthenticated.set(value)
  }

  logout() {
    localStorage.clear()
    this.userAuthenticated.set(false)
    this.goToLogin()
   }
}
