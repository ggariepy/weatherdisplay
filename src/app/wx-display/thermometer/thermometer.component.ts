import { Component, OnInit } from '@angular/core';
import { WxDataService } from 'src/app/api/wxdata.service';

@Component({
  selector: 'app-thermometer',
  templateUrl: './thermometer.component.html',
  styleUrls: ['./thermometer.component.css']
})
export class ThermometerComponent implements OnInit {
  
  constructor(private dataService: WxDataService) {}

  ngOnInit(): void {
    this.dataService
      .getCurrentConditions()
      .subscribe((data: any) => {
        console.log(data);
      });
  }
}
