import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductosComponent } from './components/productos/productos.component';
import { Maquinas } from './Shared/interfaces/Maquinas';
import { CartService } from './services/cart.service';
import { CartItem}from './Shared/interfaces/CartItem';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }