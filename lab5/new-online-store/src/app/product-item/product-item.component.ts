import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product;

  @Output() removed = new EventEmitter<number>();
  @Output() liked = new EventEmitter<number>();

  like(): void {
    this.liked.emit(this.product.id);
  }

  remove(): void {
    this.removed.emit(this.product.id);
  }
}
