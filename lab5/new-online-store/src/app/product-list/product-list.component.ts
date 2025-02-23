import { Component, Input } from '@angular/core';
import { Product } from '../product.model';
import {ProductItemComponent} from '../product-item/product-item.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  imports: [
    ProductItemComponent,
    NgForOf
  ],
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products: Product[] = [];

  // Метод для увеличения количества лайков
  like(productId: number): void {
    const index = this.products.findIndex(product => product.id === productId);
    this.products[index].likes += 1; // Увеличиваем количество лайков
  }

  // Метод для удаления продукта
  remove(productId: number): void {
    this.products = this.products.filter(product => product.id !== productId);
  }
}
