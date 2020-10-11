import { Component, OnInit } from '@angular/core';
import { AppService } from '../../core/services/app.service'
@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {
  courseList = [];
  aaa = "https://img-a.udemycdn.com/course/240x135/567828_67d0.jpg" ;
  
  constructor(private courseService: AppService) { }

  ngOnInit(): void {
    this.courseService.getCoursesList().subscribe({
      next: (result) => {
        let formatResult = []
        result.forEach(element => {
          if(element.hinhAnh == 'http://elearning0706.cybersoft.edu.vn/hinhanh/program-c.svg') {
            element.hinhAnh = 'https://img-a.udemycdn.com/course/240x135/567828_67d0.jpg'
          }
          formatResult.push(element)
        });
        this.courseList = formatResult;
        console.log(result)
      },
      error: (err) => {
        console.log(err)
      },
      complete: () => {
        console.log('DONE')
      }
    });
    this.courseService.getVietle().subscribe({
      next: (result)=>{
        console.log(result)
      }
    })

  }

}
