### Home Task 3

- Add `deleteAll` to CartService;
- Add `LocalStorageService` with (`setItem, getItem and removeItem` methods);
- Create `ConfigOptionsService` with getter & setter for settings;
- Create `ConstantService` and register by `useValue`;
- Add to `AboutComponent` constructor all created services, check their work by console.log;
- Add `PrettyDirective` for change style from directive.


### Home Task 2

- Changed app prefix to `'sh'`;
- Add OnPush strategy to presentation components;
- Add possibility to change count of product in CartItemComponent;
- Add calculating of totalAmount and totalCount to CartService;
- Add title text using ViewChild and Renderer2;
- Add directive `[hightlight]` for changing background of hovered cart-item. 

### Home Task 1

- Created FirstComponent with simple markup and added to AppComponent
- Products module:
   - ProductComponent, ProductListComponent;
   - ProductService for getting list of products;
   - IProductModel, ProductModel, Genre;
   - mock file.
- Cart module:
   - CartComponent, CartItemComponent;
   - CartService (addProduct(), deleteProduct() methods);
   - CartProductModel (Partial from ProductModel).
- Add bootstrap and fontawesome for styling.
