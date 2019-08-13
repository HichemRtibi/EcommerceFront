import {Component, OnInit} from '@angular/core';
import {CatalogueService} from './services/catalogue.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  categories;

  constructor(private catservice: CatalogueService) {

  }

  ngOnInit() {
  }

  title = 'EcommerceFront';

  private getCategories() {
    this.catservice.getResources('/categories').subscribe(data => {
      this.categories = data
    }, error1 => {
      console.log(error1)
    })
  }
}
