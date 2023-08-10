import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  host: {
    class: 'dashboard'
  },
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  chartData: any[] = [
    {
      name: 'budget',
      value: 150,
    },
    {
      name: 'lost',
      value: 300,
    },
    // Add more data as needed
  ];

  colorScheme =
    [
      {name: "budget", value: '#0CA840'},
      {name: "lost", value: '#CF4219'}
    ]

  chartData2: any[] = [
    {
      name: '2023-07-01', // The format should be 'YYYY-MM-DD'
      series: [
        {
          name: 'Income',
          value: 2000, // Amount of income for this date
        },
        {
          name: 'Loss',
          value: 500, // Amount of loss for this date
        },
      ],
    },
    {
      name: '2023-07-02',
      series: [
        {
          name: 'Income',
          value: 800,
        },
        {
          name: 'Loss',
          value: 300,
        },
      ],
    },
    {
      name: '2023-07-03',
      series: [
        {
          name: 'Income',
          value: 100,
        },
        {
          name: 'Loss',
          value: 300,
        },
      ],
    },
    {
      name: '2023-07-04',
      series: [
        {
          name: 'Income',
          value: 250,
        },
        {
          name: 'Loss',
          value: 245,
        },
      ],
    },
    {
      name: '2023-07-05',
      series: [
        {
          name: 'Income',
          value: 400,
        },
        {
          name: 'Loss',
          value: 300,
        },
      ],
    },
    {
      name: '2023-07-06',
      series: [
        {
          name: 'Income',
          value: 240,
        },
        {
          name: 'Loss',
          value: 125,
        },
      ],
    },
    // Add more data as needed for other dates
  ];

  customColors = [
    {
      name: 'Income',
      value: '#5AA454', // Custom color for Income bars
    },
    {
      name: 'Loss',
      value: '#A10A28', // Custom color for Loss bars
    },
  ];

  doughnut = false; // Set to true for a doughnut chart
}
