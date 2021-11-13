import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {
  canvas: any;
  ctx: any;
  @ViewChild('bestProductSeller') bestProductSellerChart: any;
  @ViewChild('bestSeller') bestSellerChart: any;
  @ViewChild('anualSells') anualSellsChart: any;

  // cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
  //   map(({ matches }) => {
  //     if (matches) {
  //       return [
  //         { title: 'Card 1', cols: 1, rows: 1 },
  //         { title: 'Card 2', cols: 1, rows: 1 },
  //         { title: 'Card 3', cols: 1, rows: 1 },
  //         { title: 'Card 4', cols: 1, rows: 1 }
  //       ];
  //     }

  //     return [
  //       { title: 'Card 1', cols: 2, rows: 1 },
  //       { title: 'Card 2', cols: 1, rows: 1 },
  //       { title: 'Card 3', cols: 1, rows: 2 },
  //       { title: 'Card 4', cols: 1, rows: 1 }
  //     ];
  //   })
  // );

  constructor(
    // private breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.renderBestProductSellerChart();
    this.renderPieChart();
    this.renderBarChart();
  }

  renderBestProductSellerChart() {
    this.canvas = this.bestProductSellerChart.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    new Chart(this.ctx, {
      type: 'pie',
      options: {
        legend: {
          position: 'left',
          align: 'center'
        },
        responsive: true
      },
      data: {
        datasets: [{
          data: [20, 40, 30, 10],
          backgroundColor: ["#FF416A", "#36A2EB", "#FFC234", "#FF9F40"],
          fill: true
        }],
        labels: ['Shampoo X', 'Matizante', 'Tinte', 'Tijeras']
      },
    });
  }

  renderPieChart() {
    this.canvas = this.bestSellerChart.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    new Chart(this.ctx, {
      type: 'pie',
      options: {
        legend: {
          position: 'left',
          align: 'center'
        },
        responsive: true
      },
      data: {
        datasets: [{
          data: [20, 40],
          backgroundColor: ["#FFC234", "#FF9F40"],
          fill: true
        }],
        labels: ['Fernando', 'Abigail']
      },
    });
  }

  renderBarChart() {
    this.canvas = this.anualSellsChart.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    new Chart(this.ctx, {
      type: 'bar',
      options: {
        legend: {
          position: 'left',
          align: 'center'
        },
        responsive: true
      },
      data: {
        datasets: [{
          data: [
            3872, 2200, 1000,
            7212, 3092, 2742,
            8123, 1921, 3221,
            902, 12309, 2222
          ],
          backgroundColor: [
            "#FF416A", "#36A2EB", "#FFC234",
            "#FF9F40", "#SDFf22", "#EFED89",
            "#FETI90", "#FFC234", "#TUKL88",
            "#FF9F40", "#DFEF22", "#FEFE22"],
          fill: true
        }],
        labels: [
          'Enero 2021', 'Febrero 2019', 'Marzo 2019',
          'Abril 2019', 'Mayo 2021', 'Junio 2021',
          'Julio 2021', 'Agosto 2021', 'Septiembre 2021',
          'Octubre 2021', 'Noviembre 2021', 'Diciembre 2021'
        ]
      },
    });
  }

}
