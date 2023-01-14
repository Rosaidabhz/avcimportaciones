import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  products: any[] = [];
  Maquinas: any;

  constructor(private productsService: ProductosService, private cartService: CartService) {
    this.products = this.productsService.getProducts();
    // console.log(this.products);
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);    
    this.cartService.addToCart(product);
    window.alert('Producto agregado al carrito: ' + product.title)
  }

  ngOnInit(): void {
  }
  
}