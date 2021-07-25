
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-nestedmenu',
  templateUrl: './nestedmenu.component.html',
  styleUrls: ['./nestedmenu.component.css']
})
export class NestedmenuComponent implements OnInit {

  constructor(private service: ServiceService) { }
  selectedCountryControl = new FormControl();
  catalogData: any = [];
  public classifications: string[] = [];
  public selectedClassification: any;

  ngOnInit(): void {
    this.service.getJSON().subscribe(response => {
      if (response) {
        this.catalogData = response.data.locations;
      }
      console.log(this.catalogData);
    });
  }

  public onSelectedLocation(data: any) {
    console.log("selected location", data)
  }

  public onBranchesSelected(data: any) {
    this.selectedClassification = data.srcElement.value.toString();
    console.log("Selected branch", this.selectedClassification)
  }

  public onCategorySelected(data: any) {
    this.selectedClassification = data.srcElement.value.toString();
    console.log("selected category", this.selectedClassification)
  }

  public onSubCategoriesSelected(data: any): void {
    this.selectedClassification = data.srcElement.value.toString();
    console.log("selected subcategories", this.selectedClassification)
  }
}
