import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  imports: [
    NgForOf
  ],
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h8b/h46/84727487070238.jpg?format=gallery-medium',
      name: 'Видеокарта ZOTAC GAMING RTX 4060 Twin Edge ZT-D40600E-10M 8 Гб',
      description: 'Технологии:nVidia 3D Vision, 4K (поддержка мониторов ultraHD), 8K (поддержка мониторов ultra HD), DIRECTX 12 ULTIMATE, NVIDIA ANSEL В VR-играх',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/zotac-gaming-rtx-4060-twin-edge-zt-d40600e-10m-8-gb-112525286/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h28/h04/80944978755614.jpg?format=gallery-large',
      name: 'Видеокарта PELADN Radeon RX 580 8 Гб',
      description: '\n' +
        'Серия   Radeon RX 580\n' +
        'Интерфейс   PCI-E 3.0\n' +
        'Количество поддерживаемых мониторов   3\n' +
        'Производитель графического процессора   AMD',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/peladn-radeon-rx-580-8-gb-110566490/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9d/h3f/82307177611294.jpg?format=gallery-medium',
      name: 'Видеокарта GIGABYTE GeForce RTX 4060 GAMING OC GV-N4060GAMING OC-8GD 8 Гб',
      description: '\n' +
        'Серия   GeForce RTX 40 Series\n' +
        'Графический процессор   GeForce RTX 4060\n' +
        'Интерфейс   PCI-E 4.0\n' +
        'Количество поддерживаемых мониторов   4\n' +
        'Производитель графического процессора   NVIDIA\n' +
        'Максимальное разрешение   7680x4320',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/gigabyte-geforce-rtx-4060-gaming-oc-gv-n4060gaming-oc-8gd-8-gb-112040551/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/he5/h31/84950276145182.png?format=gallery-medium',
      name: 'Видеокарта AFOX RX 580 AFRX580-8192D5H3-V3 8 Гб',
      description: 'Серия   Radeon RX 500 series\n' +
        'Интерфейс   PCI-E 3.0\n' +
        'Количество поддерживаемых мониторов   3\n' +
        'Производитель графического процессора   AMD\n' +
        'Максимальное разрешение   3840x2160',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/afox-rx-580-afrx580-8192d5h3-v3-8-gb-115994945/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hee/h21/82598043615262.jpg?format=gallery-medium',
      name: 'Видеокарта MSI GeForce RTX 4060 VENTUS 2X BLACK OC 8 Гб',
      description: '\n' +
        'Серия   GeForce RTX 40 Series\n' +
        'Интерфейс   PCI-E 4.0\n' +
        'Количество поддерживаемых мониторов   4\n' +
        'Производитель графического процессора   NVIDIA',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/msi-geforce-rtx-4060-ventus-2x-black-oc-8-gb-112387784/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h14/h8b/85667063857182.jpg?format=gallery-medium',
      name: 'Видеокарта Palit RTX 4060 INFINITY 2 8 Гб',
      description: '\n' +
        'Серия   GeForce RTX 40 Series\n' +
        'Интерфейс   PCI-E 4.0\n' +
        'Количество поддерживаемых мониторов   4\n' +
        'Производитель графического процессора   NVIDIA\n' +
        'Максимальное разрешение   7680x4320',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/palit-rtx-4060-infinity-2-8-gb-118157932/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb6/he8/84963040886814.png?format=gallery-medium',
      name: 'Видеокарта GIGABYTE GeForce RTX 4070 SUPER WINDFORCE OC GV-N407SWF3OC-12GD 12 Гб',
      description: '\n' +
        'Серия   GeForce RTX 40 Series\n' +
        'Графический процессор   GeForce RTX 4070 SUPER\n' +
        'Интерфейс   PCI-E 4.0\n' +
        'Количество поддерживаемых мониторов   4\n' +
        'Производитель графического процессора   NVIDIA',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/gigabyte-geforce-rtx-4070-super-windforce-oc-gv-n407swf3oc-12gd-12-gb-116045177/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h7e/hd2/82469654954014.jpg?format=gallery-large',
      name: 'Видеокарта ASUS Dual GeForce RTX 4060 OC 8 Гб',
      description: '\n' +
        'Серия   GeForce RTX 40 Series\n' +
        'Интерфейс   PCI-E 4.0\n' +
        'Количество поддерживаемых мониторов   4\n' +
        'Производитель графического процессора   NVIDIA\n' +
        'Максимальное разрешение   7680x4320',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/asus-dual-geforce-rtx-4060-oc-8-gb-112294353/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hbd/hfb/64345175982110.jpg?format=gallery-medium',
      name: 'Видеокарта GIGABYTE GeForce RTX 3060 GAMING OC 12G rev. 2.0 12 ГБ',
      description: 'Видеокарта GIGABYTE GeForce RTX 3060 GAMING OC Rev2.0 способна гарантировать возможность комфортного использования большинства видеоигр. Главный компонент видеоадаптера – видеопроцессор GeForce RTX 3060. Устройство не располагает поддержкой мультипроцессорной конфигурации.',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/gigabyte-geforce-rtx-3060-gaming-oc-12g-rev-2-0-12-gb-101717712/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p8b/p1e/6484619.jpg?format=gallery-medium',
      name: 'Видеокарта AFOX GTX 1660 SUPER AF1660S-6144D6H1-V2 6 Гб',
      description: '\n' +
        'Серия   GeForce 16 Series\n' +
        'Интерфейс   PCI-E 3.0\n' +
        'Техпроцесс   12.0 нм\n' +
        'Количество поддерживаемых мониторов   2',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/afox-gtx-1660-super-af1660s-6144d6h1-v2-6-gb-112471527/?c=750000000'
    }
  ];

  shareToWhatsApp(link: string): void {
    const phoneNumber = "77714671212";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      `Привет! Я бы хотел(а) узнать больше об этом продукте: ${link}`
    )}`;

    window.open(whatsappUrl, '_blank');
  }

  shareToTelegram(link: string): void {
    const telegramHandle = 'dias_asp';
    const telegramUrl = `https://t.me/${telegramHandle}?start=${encodeURIComponent(
      `Привет! Я бы хотел(а) узнать больше об этом продукте: ${link}`
    )}`;

    window.open(telegramUrl, '_blank');
  }
}
