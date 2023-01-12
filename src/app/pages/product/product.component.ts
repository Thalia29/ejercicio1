import { Component, OnInit } from '@angular/core';
import { ProductModel, UpdateProductDto } from 'src/app/modules/product.modul';
import { ProductHttpService } from 'src/app/services/product-http.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
//ngoninit se ejecuta luego del constructor
export class ProductComponent implements OnInit {
  //httpclient es una clase hacer las peticiones
  products: ProductModel [] = [];
  selectProduct: UpdateProductDto = {title:'' , price: 0, description: ''};
  constructor( private productHttpService: ProductHttpService) {
    this.initProduct();
  }//Inyeccion de dependencia

  initProduct(){
    this.selectProduct= {title:'' , price: 0, description: ''};
  }

  ngOnInit(): void {

    //this.getProduct();
    this.getProducts();
    //this.createProduct();
    //this.updateProduct();
    //this.deleteProduct();
  }

  getProducts() {
    const url = "https://api.escuelajs.co/api/v1/products";
    this.productHttpService.getAll().subscribe(
         response => {
           this.products = response;                    //funcion flecha o landa
         //console.log(response);
       });
   }

//subscribe lista de espera va llegar la respuesta
//Observable trae la informacion
  getProduct() {
    const url = 'https://api.escuelajs.co/api/v1/products';
    return this.productHttpService.getOne(2).subscribe(response => {
        console.log(response);

      });
  }
  createProduct() {

    const data = {
      title: 'esfero',
      price: 45,
      description: 'utiles escolares',
      categoryId: 1,
      images: ["https://api.lorem.space/image/watch?w=640&h=480&r=5922", "https://api.lorem.space/image/watch?w=640&h=480&r=3622"],
    };

    const url = 'https://api.escuelajs.co/api/v1/products/18';
    this.productHttpService.store( data ).subscribe(
      response => {
      console.log(response);

    });
  }

  updateProduct() {
    const data = {
      title: 'lapiz',
      price: 60,
      description: 'calzado-Chris',

    };
 
    this.productHttpService.update(data, 1).subscribe(
      response => {
      console.log(response);

    });

  }
  editProduct(product: ProductModel){
    this.selectProduct = product;

  }

  deleteProduct(id: ProductModel ['id']) {
    this.productHttpService.destroy(id).subscribe( response => {
     this.products = this.products.filter(product =>product.id != id)
     //console.log(response);
    }
    );

  }

}