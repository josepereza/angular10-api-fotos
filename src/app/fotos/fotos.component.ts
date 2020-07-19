import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit {
fotos:any;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getFotos().subscribe((data)=>{
      console.log(data);
      this.fotos = data;
    });
  }

}
