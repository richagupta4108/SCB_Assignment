import { NgModule } from  '@angular/core';
 
import {MatButtonModule,MatToolbarModule,MatFormFieldModule,MatProgressSpinnerModule,MatInputModule} from  '@angular/material';
import {MatCardModule} from '@angular/material/card';
 
 
@NgModule({
imports: [MatButtonModule,MatToolbarModule,MatCardModule,MatFormFieldModule,MatProgressSpinnerModule,MatInputModule],
exports: [MatButtonModule,MatToolbarModule,MatCardModule,MatFormFieldModule,MatProgressSpinnerModule,MatInputModule],
 
})
 
export  class  MyMaterialModule { }