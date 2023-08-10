import { Component } from '@angular/core';

@Component({
  selector: 'app-budget',
  host: {
    class: 'budget'
  },
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent {
  chartData: any[] = [
    {
      "name": "Germany",
      "value": 4000,
      "extra": {
        "code": "de"
      }
    },
    {
      "name": "United States",
      "value": 5000,
      "extra": {
        "code": "us"
      }
    },
    {
      "name": "France",
      "value": 3674,
      "extra": {
        "code": "fr"
      }
    },
    {
      "name": "United Kingdom",
      "value": 3624,
      "extra": {
        "code": "uk"
      }
    },
    {
      "name": "Spain",
      "value": 3300,
      "extra": {
        "code": "es"
      }
    },
    {
      "name": "Baldurs",
      "value": 1500,
      "extra": {
        "code": "bd"
      }
    },
    {
      "name": "Italy",
      "value": 3580,
      "extra": {
        "code": "it"
      }
    }
  ]
}

export function showModal() {

}
