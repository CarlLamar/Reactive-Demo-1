import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyserviceService } from './myservice.service';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpclientComponent } from './httpclient/httpclient.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpclientService } from './httpclient.service';
@NgModule({
  declarations: [AppComponent, NewCmpComponent, HttpclientComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [MyserviceService, HttpclientService],
  bootstrap: [AppComponent],
})
export class AppModule {}
