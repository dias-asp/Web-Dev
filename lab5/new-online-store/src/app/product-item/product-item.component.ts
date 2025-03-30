import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.model';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  imports: [
    NgIf
  ],
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product;

  @Output() removed = new EventEmitter<number>();
  @Output() liked = new EventEmitter<number>();
  @Output() unliked = new EventEmitter<number>();

  liked1: boolean = false;

  like(): void {
    this.liked.emit(this.product.id);
    this.liked1 = true;
  }
  unlike(): void {
    this.unliked.emit(this.product.id);
    this.liked1 = false;
  }

  remove(): void {
    this.removed.emit(this.product.id);
  }
}
