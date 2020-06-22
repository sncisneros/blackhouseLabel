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

    this.remove = function(itemId){
        var myItem = this.items[itemId];
        

        for (var i=0; i < this.items.length; i++) {
            if (this.items[i].item._id === itemId) {
                this.items.splice([i],1);
            }
        }
        // const isExisting = this.items.find(i =>
        //     i.id == itemId)
        //     if(isExisting>=0){
        //     this.items.splice(isExisting, 1)
        //     }

        this.itemQty--;
        myItem.Price = myItem.productPrice;
        this.totalPrice = this.totalPrice - myItem.Price;
        
    }

    this.cartArray = function(){
        var arr =[];
        for(var id in this.items){
            arr.push(this.items.item._id);
        }
        return arr;
    }

}

