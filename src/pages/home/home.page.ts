import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/product.model';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css']
})
export class HomePage implements OnInit {
    private productService: ProductService = new ProductService();

    public products: Product[] = [];

    ngOnInit(): void {
        this.products = this.productService.getProducts();
    }
}
