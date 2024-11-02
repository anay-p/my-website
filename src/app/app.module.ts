import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackendService } from './backend.service';
import { provideHttpClient } from '@angular/common/http';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputGroupModule,
    InputTextModule,
    ButtonModule
  ],
  providers: [
    BackendService,
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
