import { Component, OnInit } from '@angular/core';
import {CatalogueService} from '../services/catalogue.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  private prodcuts;

  constructor(private catalogueservices:CatalogueService,private route:ActivatedRoute) { }

  ngOnInit() {
    let p1=this.route.snapshot.params.p1;
    if(p1==1){
      this.getProducts("/products/search/selectedProducts");
    }else if(p1==2)
    {
      let idCat=this.route.snapshot.params.p1;
      this.getProducts("/categories/"+idCat+"/products");
    }


  }
  getProducts(url)
  {
    this.catalogueservices.getResources(url).subscribe(data=>{
      this.prodcuts=data;
      },error1 => {
      console.log(error1)
      }
    )
  }

}
