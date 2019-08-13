import { Component, OnInit } from '@angular/core';
import {CatalogueService} from '../services/catalogue.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  private prodcuts;


  constructor(private catalogueservices:CatalogueService,private route:ActivatedRoute,private router:Router) {


  }

  ngOnInit() {
    this.router.events.subscribe(value => {
      if(value instanceof NavigationEnd){
        let url=value.url;
        let p1=this.route.snapshot.params.p1;
        if(p1==1){
          this.getProducts("/products/search/selectedProducts");
        }else if(p1==2)
        {
          let idCat=this.route.snapshot.params.p2;
          this.getProducts("/categories/"+idCat+"/products");
        }
      }
    })


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
