import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { WillLearnComponent } from './will-learn/will-learn.component';
import { ContentComponent } from './content/content.component';
import { CourseDescriptionComponent } from './course-description/course-description.component';
import { CourseReviewComponent } from './course-review/course-review.component';
import { DetailComponent } from './detail.component';
import { RequirementComponent } from './requirement/requirement.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { CourseCartComponent } from './course-cart/course-cart.component';
import { Routes, RouterModule } from '@angular/router';

const detailRouter: Routes = [
  { path: 'detail/:maKhoaHoc', component: DetailComponent }
]



@NgModule({
  declarations: [DetailComponent, HeaderComponent, FooterComponent, BannerComponent, WillLearnComponent, ContentComponent, CourseDescriptionComponent, CourseReviewComponent, RequirementComponent, FeedbackComponent, CourseCartComponent],
  imports: [
    CommonModule,RouterModule.forChild(detailRouter)
  ],
  exports: [DetailComponent]
})
export class DetailModule { }
