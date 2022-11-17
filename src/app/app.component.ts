import { Component, VERSION } from '@angular/core';
import { TestInterface } from './testInterface';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  test: TestInterface[] = [];

  cols: any[] = [
    { title: 'Id', analyticDescriptionTypeId: 1, analyticType: 'importData1' },
    {
      title: 'Name',
      analyticDescriptionTypeId: 2,
      analyticType: 'importData1',
    },
    {
      title: 'Price',
      analyticDescriptionTypeId: 3,
      analyticType: 'importData1',
    },
    {
      title: 'Stored',
      analyticDescriptionTypeId: 4,
      analyticType: 'importData1',
    },
    {
      title: 'CostPerPound',
      analyticDescriptionTypeId: 1,
      analyticType: 'importData2',
    },
    {
      title: 'Mixture',
      analyticDescriptionTypeId: 2,
      analyticType: 'importData2',
    },
  ];

  importData1 = [
    {
      id: 133688,
      analyticId: 8913,
      analyticDescriptionTypeId: 1,
      description: 1,
    },
    {
      id: 133689,
      analyticId: 8913,
      analyticDescriptionTypeId: 2,
      description: 'TestArticle1',
    },
    {
      id: 133690,
      analyticId: 8913,
      analyticDescriptionTypeId: 3,
      description: 23.4,
    },
    {
      id: 133691,
      analyticId: 8913,
      analyticDescriptionTypeId: 4,
      description: 25,
    },
    {
      id: 133692,
      analyticId: 8914,
      analyticDescriptionTypeId: 1,
      description: 2,
    },
    {
      id: 133693,
      analyticId: 8914,
      analyticDescriptionTypeId: 2,
      description: 'TestArticle2',
    },
    {
      id: 133694,
      analyticId: 8914,
      analyticDescriptionTypeId: 3,
      description: 24.99,
    },
    {
      id: 133695,
      analyticId: 8914,
      analyticDescriptionTypeId: 4,
      description: 100,
    },
  ];
  importData2 = [
    {
      id: 166789,
      measureId: 8913,
      analyticDescriptionTypeId: 1,
      value: 1,
    },
    {
      id: 166790,
      measureId: 8913,
      analyticDescriptionTypeId: 2,
      value: 1.667,
    },
    {
      id: 166791,
      measureId: 8914,
      analyticDescriptionTypeId: 1,
      value: 23.2424,
    },
    {
      id: 166792,
      measureId: 8914,
      analyticDescriptionTypeId: 2,
      value: 25.24,
    },
  ];
  ngOnInit() {
    this.fillArray(this.importData1, this.importData2);
  }

  fillArray(importData1 = [], importData2 = []) {
    for (let k = 0; k < this.importData1.length; k + 4) {
      for (let i = k; i < i + 4; i++) {
        if (this.importData1[i].analyticDescriptionTypeId == 1) {
          this.test[i][0] == importData1[i].descrition;
        }
        if (this.importData1[i].analyticDescriptionTypeId == 2) {
          this.test[i].name == importData1[i].descrition;
        }
        if (this.importData1[i].analyticDescriptionTypeId == 3) {
          this.test[i].price == importData1[i].descrition;
        }
        if (this.importData1[i].analyticDescriptionTypeId == 4) {
          this.test[i].stored == importData1[i].descrition;
        }
      }
    }

    for (let j = 0; j < this.importData1.length; j++) {
      if (this.importData2[j].analyticDescriptionTypeId == 1) {
        this.test[j].costPerPound == importData2[j].descrition;
      }
      if (this.importData2[j].analyticDescriptionTypeId == 2) {
        this.test[j].mixture == importData2[j].descrition;
      }
    }
    console.log(this.test);
  }
}
