import { Component, OnInit } from '@angular/core';
import {CatalogueService} from '../services/catalogue.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  private prodcuts;

  constructor(private catalogueservices:CatalogueService) { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts()
  {
    this.catalogueservices.getResources("/products/search/selectedProducts").subscribe(data=>{
      this.prodcuts=data;
      },error1 => {
      console.log(error1)
      }
    )
  }

}
