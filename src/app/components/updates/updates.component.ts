import { Component, OnInit } from '@angular/core';
import { UpdateService } from '../../services/update.service';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.css']
})
export class UpdatesComponent{
  constructor(private updateService: UpdateService) {}
  ngOnInit() {
    // this.getUpdates();
  }

  getUpdates() {
    this.updateService.getUpdates().subscribe(
      {
        next: (res) => {
            alert('Updates working: ' + res.message);
        },
        error: (error) => {
          console.error('Error fetching updates:', error);
        }
      } 
    ); 
  }
 }
