import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MynewcompComponent } from "./mynewcomp/mynewcomp.component";
import { DateComponent } from "./date/date.component";
import { OtherComponent } from "./other/other.component";
import { DatabindingComponent } from './databinding/databinding.component';
import { PropertyBindingComponent } from './databinding/property-binding/property-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    MynewcompComponent,
    DateComponent,
    OtherComponent,
    DatabindingComponent,
    PropertyBindingComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
