import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CompanyService } from '../company.service';
import { Company, Vacancy } from '../models';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {
  company!: Company
  loaded: boolean = false
  vacancies: Vacancy[] = []

  constructor(private companyService: CompanyService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.fetchData()
  }

  fetchData() {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.companyService.getCompany(id).subscribe((company) => {
        this.company = company;

        this.companyService.getCompanyVacancies(id).subscribe((data) => {
          this.vacancies = data;
          this.loaded = true;
        });
      });
    });
  }
}
