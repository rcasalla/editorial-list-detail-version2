import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Editorial } from '../editorial';
import { EditorialDetailComponent } from '../editorial-detail/editorial-detail.component';
import { EditorialDetail } from '../editorial-detail';
import { EditorialService } from '../editorial.service';

/**
 * The component for the list of editorials in the BookStore
 */
@Component({
  selector: 'list-editorial',
  templateUrl: './editorial-list.component.html',
})
export class EditorialListComponent implements OnInit {

  /**
   * Constructor for the component
   * @param editorialService The author's services provider
   */
  constructor(private editorialService: EditorialService, private router: Router) { }


  editorial_id: number;
  selectedEditorial: EditorialDetail;
  /**
   * The list of editorials which belong to the BookStore
   */
  editorials: Editorial[];

  /**
   * Asks the service to update the list of editorials
   */
  getEditorials(): void {
    this.editorialService.getEditorials().subscribe(editorials => this.editorials = editorials);
  }



  onSelected(editorial_id: number): void {
    this.editorial_id = editorial_id;
    this.selectedEditorial = new EditorialDetail();
    this.editorialService.getEditorialDetail(editorial_id).subscribe(o => this.selectedEditorial = o);
  }

  /**
   * This will initialize the component by retrieving the list of editorials from the service
   * This method will be called when the component is created
   */
  ngOnInit() {
  this.getEditorials();
  }
}