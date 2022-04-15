import { Component, OnInit } from '@angular/core';
import { CompanyService } from './company.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'hh_front';

  logged = false;
  username = '';
  password = '';

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    const token = localStorage.getItem('access');
    if (token) {
      this.logged = true;
    }
  }

  login() {
    console.log(this.username, this.password);
    this.companyService
      .login(this.username, this.password)
      .subscribe((data) => {
        console.log(data);

        localStorage.setItem('access', data.access);
        localStorage.setItem('refresh', data.refresh);

        this.logged = true;
        this.username = '';
        this.password = '';
      });
  }

  logout() {
    this.logged = false;
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
  }
}
