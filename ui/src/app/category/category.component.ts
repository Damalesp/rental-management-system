import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  selectedCountryControl = new FormControl();
  categoryData: any = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('assets/catalog.json')
      .subscribe((response: any) => {
        this.categoryData = response.data.locations;
        console.log("response======================>", this.categoryData)
      });
  }

}
