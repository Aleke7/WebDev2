import { Component, OnInit } from '@angular/core';
import {Company} from "../models";
import {CompanyService} from "../company.service";

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  companies: Company[] = [];
  company_id: number | undefined;

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies() {
    this.companyService.getCompanies().subscribe((data) => {
      this.companies = data;
    });
  }

  show_vacancies(company_id: number) {
    if(this.company_id===company_id){
      this.company_id = -1;
    }
    else {
      this.company_id = company_id;
    }
  }
}
