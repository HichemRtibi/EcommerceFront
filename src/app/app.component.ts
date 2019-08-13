import {Component, OnInit} from '@angular/core';
import {CatalogueService} from './services/catalogue.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private categories;
  currentCategories;

  constructor(private catservice: CatalogueService, private route: Router) {

  }

  ngOnInit() {
    this.getCategories();
  }

  title = 'EcommerceFront';

  private getCategories() {
    this.catservice.getResources('/categories')
      .subscribe(data => {
        this.categories = data;
      }, error1 => {
        console.log(error1)
      })
  }

  getProductByCat(c) {
    this.currentCategories=c;
    this.route.navigateByUrl('/products/2/'+c.id);

  }
}
