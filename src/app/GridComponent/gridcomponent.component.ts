import { Component,Input,Output,EventEmitter,AfterViewInit, OnInit } from '@angular/core'
import {ExcelService} from '../services/excel.service';
import { isNumeric } from 'rxjs/util/isNumeric';
import { isDate } from 'util';

@Component({
  selector: 'grid-control',
  templateUrl: 'gridcomponent.component.html',
  styleUrls: ['./gridcomponent.component.scss']
})
export class GridComponent   {
    @Input() cols: any[]=[];
    @Input() frozenCols: any[]=[];
    @Input() data:any[]=[];
    @Input() IsFooter:boolean=false;
    @Input() IsForzen:boolean=false;
    //@Input() page=new Page();
    @Input() IsDelete:boolean=false;
    @Input() IsEdit:boolean=true;
    @Input() IsReport:boolean=true;
    @Input() IsImpersonate:boolean=false;
    @Input() isLoading:boolean=false;
    @Input() selectedRows:any[]=[];
    @Input() dynamicExportFileName:string='download_'+ new Date();
    @Output()
    impersonatechange: EventEmitter<any> = new EventEmitter<any>();
    @Output()
    editchange: EventEmitter<any> = new EventEmitter<any>();
    @Output()
    deletechange: EventEmitter<any> = new EventEmitter<any>();
  constructor(
    private excelservice:ExcelService
    ) {
   // this.setPage({offset: 0, pageSize: 10});
   this.dynamicExportFileName =this.dynamicExportFileName + '_' + Guid.newGuid();
  }
 
  
  exportExcel(fileName){
    let exportData=[]
    var _this = this;
    this.data.forEach(function (record, i) {
      let row ={};
      for (var i_1 = 0; i_1 < _this.cols.length; i_1++) {
          if (_this.cols[i_1].field) {
            let field = _this.cols[i_1].field;
        
            let header = _this.cols[i_1].header;
              row[header] =_this.displayData(record,field)
            //  row +={[field]:_this.displayData(record,field)}
          }
      }
     
      exportData.push(row);
  
  });
  if(this.IsFooter){ 
    let row ={};
    for (var i = 0; i < this.cols.length ; i++) {
      if (this.cols[i].field) {
        let field = this.cols[i].field;
        let header = this.cols[i].header;
      //    row[header] =this.sumFirstValue(i) 
      }
   }
   exportData.push(row);
  }
    this.excelservice.exportAsExcelFile(exportData,fileName)
  }

  
  
  public displayData(record, key) {
    let myKeys = key.split('.');
    let value: any =record;
    myKeys.forEach((k) => {
      value = value[k];
    });
    if (isNumeric(value)){
      value = parseInt(value.toString());
   } 
    return value;
  }

   
 

  Impersonate(rowData:any){
    this.impersonatechange.emit(rowData);
  }

  delete(rowData:any){
    this.deletechange.emit(rowData);
  }

  edit(rowData:any){
    this.editchange.emit(rowData);
  }

  
}

export class Guid {
  static newGuid() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
          return v.toString(16);
      });
  }
}

