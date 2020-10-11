import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home.component';
import { SliderComponent } from './slider/slider.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomePatnerComponent } from './home-patner/home-patner.component';
import { FooterComponent } from './footer/footer.component';
import { SologanComponent } from './sologan/sologan.component';
import { HomeItemComponent } from './home-content/home-item/home-item.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



const homeRoutes: Routes = [
  {path:'',component: HomeComponent}
]


@NgModule({
  declarations: [HeaderComponent, HomeComponent, SliderComponent, HomeContentComponent, CategoriesComponent, HomePatnerComponent, FooterComponent, SologanComponent, HomeItemComponent, LoginComponent, SignupComponent],
  imports: [
    CommonModule, RouterModule.forChild(homeRoutes),FormsModule, ReactiveFormsModule
  ],
  exports: [HeaderComponent, HomeComponent]
})
export class HomeModule { }
