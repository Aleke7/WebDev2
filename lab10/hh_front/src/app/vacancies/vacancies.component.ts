import {Component, Input, OnInit} from '@angular/core';
import {Vacancy} from "../models";

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css']
})
export class VacanciesComponent implements OnInit {
  @Input() vacancies: Vacancy[] = [];
  @Input() parent_company: any;

  constructor() { }

  ngOnInit(): void {
  }

}
