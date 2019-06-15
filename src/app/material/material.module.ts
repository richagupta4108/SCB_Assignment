import { NgModule } from  '@angular/core';
 
import {MatButtonModule,MatToolbarModule,MatFormFieldModule,MatProgressSpinnerModule,MatInputModule} from  '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatSliderModule} from '@angular/material/slider';
 
 
@NgModule({
imports: [MatButtonModule,MatToolbarModule,MatCardModule,MatFormFieldModule,MatProgressSpinnerModule,MatInputModule,MatSliderModule],
exports: [MatButtonModule,MatToolbarModule,MatCardModule,MatFormFieldModule,MatProgressSpinnerModule,MatInputModule,MatSliderModule],
 
})
 
export  class  MyMaterialModule { }