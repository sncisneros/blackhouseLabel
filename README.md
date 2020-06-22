# blackhouseLabel
Small e-commerce website for womens clothing

in the home route, we have a request to grab the full list of categories. As well, customers have the options 
to search for specific items by search term. The category route has get requests for retrieving all items in a specific
category, retriving the details of a specific item as well as adding that item to the cart, which is stored
with express-storage. Within the cart routes, there are requests to view the cart, and checkout while saving the 
cart in an order with an order number. Also a confimation email is sent when order is saved. There is the login
route which controls the login of the website admin. The admin route has all requests for admin including
getting open orders, updating orders, getting inventory info based on productSKU and adding inventory,
creating discount codes and sending emails to subscribers.

we have models that include: Category, Item, Order, Inventory, Discount, Cart, Subscriber, and User.
Discount hold attributes on discount codes, subscriber has the email and name of subscribers(as theres 
no actual members), the user will be admin users. Cart is only saved in express-session in mongoStore, and
cart model has all functions to add and remove cart items and updating cart total price.
