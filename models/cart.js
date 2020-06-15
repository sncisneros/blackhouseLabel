module.exports = function Cart(myCart){
    //update existing or new cart
    this.items = myCart.items || {};
    this.itemQty = myCart.itemQty || 0;
    this.totalPrice = myCart.totalPrice || 0;

    //add item to cart
    this.add = function(item, itemId){
        var newItem = this.items[itemId];
        if(!newItem){
            newItem = this.items[itemId] = {item: item, quantity:0, price:0};
        }

        //update item qty and price, then update cart 
        newItem.quantity++;
        newItem.price = newItem.item.productPrice*newItem.quantity;

        this.itemQty++;
        this.totalPrice += newItem.item.productPrice;
    };

    this.remove = function(item, itemId){
        var myItem = this.items[itemId];

        myItem.quantity--;
        this.itemQty--;
        myItem.Price = myItem.productPrice * myItem.quantity;
        this.totalPrice -= myItem.productPrice;
        
    }

    this.cartArray = function(){
        var arr =[];
        for (count = 0; count < this.items.length; count++) {
            for (count2 = 0; count2 < this.items[count].length; count2++) {
              System.out.println(this.items[countOne]._id);
            }
        return arr;
    }

}
}
