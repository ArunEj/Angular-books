import { Component } from '@angular/core';
import { Service } from 'src/app/service/service.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'books';
  todos: any;
  currentRate = 8;
  count: any;
  showCart: boolean = false;
  cartData: any = [];
  qtyCount: any;
  cartData1: any = [];
    mulprice: any;
    getCartData: any;

  constructor(
    private todoService: Service) {
        this.count = 0;
        this.qtyCount = 1;
    }

  ngOnInit(): void {
    this.todoService.getBookDetails().subscribe((todos) => this.todos = todos)
    // console.log(this.todos)
  }

  addCart(_id: any,_todo: any){
    if (this.cartData.indexOf(_todo) > -1) {
        // this.cartData = this.cartData.filter((e: { id: any; }) => e.id != _todo.id);
        // this.count--;
      } else {
        if ((this.cartData.find((data: { id: any; }) => data.id != _todo.id) || this.cartData.length === 0)) {
          this.cartData = [...this.cartData, _todo];
          for(var i=0;i< this.cartData.length;i++){
              this.cartData[i].qty= 1;
          }
          this.count++;
        }
    }
  }

  goToCart(){
      this.showCart = true;
  }

  back(){
    this.showCart = false;
  }

  remove(_id: any,_todo: any){
    this.cartData = this.cartData.filter((e: { id: any; }) => e.id != _todo.id);
    this.count--;
  }

  getQty(_qty: any,_cart: any){
    _cart.qty = _qty;
    console.log("getData",this.getCartData)
    this.cartData.forEach((element: { id: any; price: string; }) => {
        if (_cart.id === element.id) {
            // this.mulprice = element.price;
            console.log("element",_cart.price , element.price)
            this.cartData[_cart.id].price = JSON.parse(element.price) * _qty;
            console.log("mul",this.cartData[_cart.id].price,this.cartData)
        }
    }); 
  }
}
