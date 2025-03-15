import { Component } from '@angular/core';
import { Category } from './product.model';
import {ProductListComponent} from './product-list/product-list.component';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    ProductListComponent,
    NgForOf,
    NgIf
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'new-online-store';
  categories: Category[] = [
    {
      id: 1,
      name: 'Mouses',
      products: [
        { id: 1, name: 'Logitech G Pro X Superlight', description: 'Лучшая игровая мышь 2022 года', image: 'https://resources.cdn-kaspi.kz/img/m/p/h90/h02/64222437474334.jpg?format=preview-large', rating: 5.0, likes: 0, link: 'https://kaspi.kz/shop/p/logitech-g-pro-x-superlight-belyi-102712667/?c=750000000' },
        { id: 2, name: 'Logitech G Pro X Superlight 2', description: 'Лучшая игровая мышь 2024 года', image: 'https://resources.cdn-kaspi.kz/img/m/p/h0e/h87/84212515864606.png?format=preview-large', rating: 5.0, likes: 0, link: 'https://kaspi.kz/shop/p/logitech-g-pro-x-superlight-2-belyi-113958121/?c=750000000' },
        { id: 3, name: 'VGN Dragonfly F1 Moba', description: 'Хорошая бюджетная мышь', image: 'https://resources.cdn-kaspi.kz/img/m/p/h89/h4b/84048997548062.jpg?format=preview-large', rating: 4.9, likes: 0, link: 'https://kaspi.kz/shop/p/vgn-dragonfly-f1-moba-belyi-113546032/?c=750000000'},
        { id: 4, name: 'Razer DeathAdder V3 Pro', description: 'Хороший соперник от Razer', image: 'https://resources.cdn-kaspi.kz/img/m/p/h0b/hec/67863260069918.jpg?format=preview-large', rating: 4.9, likes: 0, link: 'https://kaspi.kz/shop/p/razer-deathadder-v3-pro-belyi-108434841/?c=750000000'},
        { id: 5, name: 'Steelseries Sensei Ten', description: 'Возрождение легендарной мышки из прошлого', image: 'https://resources.cdn-kaspi.kz/img/m/p/hbc/h69/63840160546846.jpg?format=preview-large', rating: 4.8, likes: 0, link: 'https://kaspi.kz/shop/p/steelseries-sensei-ten-belyi-108434841/?c=750000000'}
      ]
    },
    {
      id: 2,
      name: 'Keyboards',
      products: [
        { id: 1, name: 'Logitech G915 TKL', description: 'Низкопрофильная механика от Logitech', image: 'https://resources.cdn-kaspi.kz/img/m/p/h9b/h28/87314973786142.png?format=gallery-medium', rating: 4.9, likes: 0, link: 'https://kaspi.kz/shop/p/logitech-g915-x-lightspeed-tkl-920-012757-chernyi-124352485/?c=750000000'},
        { id: 2, name: 'Keychron K8 Gateron White', description: 'Надежная механика от Keychron', image: 'https://resources.cdn-kaspi.kz/img/m/p/h2b/hff/66368652541982.jpg?format=preview-large', rating: 4.9, likes: 0, link: 'https://kaspi.kz/shop/p/keychron-k8-gateron-white-led-red-chernyi-107827265/?c=750000000' },
        { id: 3, name: 'Wooting 80HE', description: 'Профессиональная клавиатура с Hall Effect', image: 'https://resources.cdn-kaspi.kz/img/m/p/pde/paf/23778916.jpg?format=preview-large', rating: 5.0, likes: 0, link: 'https://kaspi.kz/shop/p/wooting-80he-chernyi-107827265/?c=750000000'},
        { id: 4, name: 'VARMILO VEA87 Panda', description: 'Varmilo, больше добавить нечего', image: 'https://resources.cdn-kaspi.kz/img/m/p/h4f/h36/84164640702494.jpg?format=preview-large', rating: 5.0, likes: 0, link: 'https://kaspi.kz/shop/p/varmilo-vea87-panda-r2-cherry-mx-silent-red-zelenyi-113764245/?c=750000000'},
        { id: 5, name: 'Akko 5075B Plus', description: 'Неплохая механика с хорошими свитчами с заавода и хотсвапом', image: 'https://resources.cdn-kaspi.kz/img/m/p/hbc/ha3/80898024701982.jpg?format=preview-large', rating: 4.7, likes: 0, link: 'https://kaspi.kz/shop/p/akko-5075b-plus-black-silver-v3-cream-yellow-chernyi-110507428/?c=750000000'}
      ]
    },
    {
      id: 3,
      name: 'Headphones',
      products: [
        { id: 1, name: 'Logitech G435', description: 'Самые легкие игровые наушники на рынке', image: 'https://resources.cdn-kaspi.kz/img/m/p/h56/h44/86379109220382.jpg?format=preview-large', rating: 4.8, likes: 0, link: 'https://kaspi.kz/shop/p/logitech-g435-belyi-106496742/?c=750000000'},
        { id: 2, name: 'Steelseries Arctis 5', description: 'Игровые наушники от Steelseries', image: 'https://resources.cdn-kaspi.kz/img/m/p/h57/h09/63759785295902.jpg?format=preview-large', rating: 4.7, likes: 0, link: 'https://kaspi.kz/shop/p/steelseries-arctis-5-chernyi-4802439/?c=750000000'},
        { id: 3, name: 'Logitech G Pro X', description: 'Профессиональные наушники от Logitech', image: 'https://resources.cdn-kaspi.kz/img/m/p/hda/h35/63881966288926.jpg?format=preview-large', rating: 4.9, likes: 0, link: 'https://kaspi.kz/shop/p/logitech-g-pro-x-chernyi-102712667/?c=750000000'},
        { id: 4, name: 'Logitech G Pro X 2 Lightspeed', description: 'Улучшенная версия профессиональных наушников', image: 'https://resources.cdn-kaspi.kz/img/m/p/ha7/h5d/82389321252894.jpg?format=preview-large', rating: 4.7, likes: 0, link: 'https://kaspi.kz/shop/p/logitech-g-pro-x-2-lightspeed-chernyi-112221535/?c=750000000'},
        { id: 5, name: 'Razer Kraken Kitty edition', description: 'Ушки!!!', image: 'https://resources.cdn-kaspi.kz/img/m/p/ha5/h0e/63945413459998.jpg?format=preview-large', rating: 4.9, likes: 0, link: 'https://kaspi.kz/shop/p/razer-kraken-kitty-edition-quartz-rozovyi-100693731/?c=750000000'}
      ]
    },
    {
      id: 4,
      name: 'Keyboard Switches',
      products: [
        { id: 1, name: 'GLORIOUS Gateron Red', description: 'Стандартные красные линейные переключатели', image: 'https://resources.cdn-kaspi.kz/img/m/p/pb6/p1b/27697712.jpg?format=preview-large', rating: 4.9, likes: 0, link: 'https://kaspi.kz/shop/p/glorious-gateron-red-gat-red-krasnyi-135586797/?c=750000000'},
        { id: 2, name: 'Akko Cream Yellow V3 Pro', description: 'Отличный аналог красных cherry', image: 'https://resources.cdn-kaspi.kz/img/m/p/hd8/hbd/81097895182366.jpg?format=preview-large', rating: 4.9, likes: 0, link: 'https://kaspi.kz/shop/p/akko-cream-yellow-v3-pro-zheltyi-110682515/?c=750000000' },
        { id: 3, name: 'Akko fairy pink', description: 'Крутые тихие переключатели', image: 'https://resources.cdn-kaspi.kz/img/m/p/h4c/hbf/85489876271134.jpg?format=preview-large', rating: 5.0, likes: 0, link: 'https://kaspi.kz/shop/p/akko-fairy-fioletovyi-117624915/?c=750000000'},
        { id: 4, name: 'OUTEMU Silent Peach', description: 'Стандарт тихих переключателей', image: 'https://resources.cdn-kaspi.kz/img/m/p/h6c/h06/84947606634526.jpg?format=preview-large', rating: 5.0, likes: 0, link: 'https://kaspi.kz/shop/p/outemu-silent-peach-rozovyi-115061010/?c=750000000'},
        { id: 5, name: 'Akko Radiant Red', description: 'Кастомные свитчи, аналогия всех красных', image: 'https://resources.cdn-kaspi.kz/img/m/p/hc0/hc5/68439668129822.jpg?format=preview-large', rating: 4.7, likes: 0, link: 'https://kaspi.kz/shop/p/akko-custom-switch-radiant-red-krasnyi-108667684/?c=750000000'}
      ]
    }
    // Two more categories
  ];

  selectedCategory: Category | null = null;

  selectCategory(category: Category): void {
    this.selectedCategory = category;
  }
}
