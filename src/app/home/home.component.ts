import { CommonModule } from '@angular/common';
import { Component, effect, signal } from '@angular/core';
import { CameraComponent } from '../camera/camera.component';
import { StatisticsComponent } from '../statistics/statistics.component';

export interface ICameraSites {
id: string;
camera_name: string;
sites: ISites[]
}

export interface ISites {
  site_id: string;
  site_address: string
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CameraComponent, StatisticsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  selectedValue = signal('');
  siteList = signal<ISites[]>([])
  //call localhost:3000/items/1

public cameraSites: ICameraSites[] = [ 
  { 
    id: '1', 
    camera_name: 'CCTV1', 
    sites: [ 
      { 
        site_id: '1', 
        site_address: 'Alangilan'
      } 
    ] 
  },
  { 
    id: '2', 
    camera_name: 'CCTV2', 
    sites: [ 
      { 
        site_id: '1', 
        site_address: 'Balagtas'
      },
      { 
        site_id: '2', 
        site_address: 'Cuta'
      }  
    ] 
  }  
]
currentTab = signal('camera')

onSelectValue(event: EventTarget | null) {
  const selectedId: string = (event as HTMLSelectElement).value
  this.selectedValue.set(selectedId)

  const selectedCamera = this.cameraSites?.find(x => x.id === selectedId)?.sites
  // const selectedSite = selectedCamera.map(item => item.sites)[0][0]
  // console.log(selectedCamera)
  this.siteList.set(selectedCamera!)
}
}
