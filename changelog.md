### Home Task 7

- Add `productsState`, `ordersState` and `routerState`;
- Create actions using class and functions;
- Add selectors, effects and reducers;
- Add `ngrx/entities` for `productsState`. 

### Home Task 6

- Add `json-server`, make changes for `products.service` (with Observable);
- Add `json-server-auth`, make changes for `auth.service` (with Promise);
- Add `TimingInterceptor` for `products` requests;
- Create `AppSettings` for upload and save settings to LS.


### Home Task 5

- Add routing to `app.module`;
- Create products detail page;
- Create lazy `AdminModule` with nesting routing;
- Create `AuthGuard`, `RoleGuard` and `ProductResolveGuard`;
- Create `Login` page, `AuthService` for authorization;
- Add / Edit actions as admin;
- Add `canView` directive;
- Save cart products and user to localStorage;
- Add `404` page.

###### For authorization, use these users: 
1. Usual: `john_doe@gmail.com / zaqwsx`
2. Admin: `admin@epam.com / admin`
 
### Home Task 4 

- Create `OrderByPipe`;
- Already in use pipe `async` for product list;
- Add build-in pipes:
     - `currency` (for product price);
     - `date` (for product lastUpdate);
     - `uppercase`, `titlecase` (for product name)
     - `i18nPlural` (for totalCount inside cart).


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
