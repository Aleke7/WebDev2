import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})


export class ProductItemComponent {
  @Input() product: any;
  @Input() parentCategory: string;

  liked = false
  show = true
  constructor() {
    this.parentCategory = ''
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  onBuy() {
    window.alert('Your product has been added to the cart');
  }

  increaseLikes(){
    if(!this.liked) {
      this.product.like++;
      this.liked = true;
    }
    else{
      this.product.like--;
      this.liked = false;
    }
  }

  delete(){
    this.show = false;
  }
}
