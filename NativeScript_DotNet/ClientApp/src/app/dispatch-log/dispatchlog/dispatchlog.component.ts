import { Component, OnInit } from '@angular/core';
import { DispatchlogService } from '../../services/dispatchlog.service';
import { DispatchLog } from '../../model/dispatch-log';

@Component({
  selector: 'app-dispatchlog',
  templateUrl: './dispatchlog.component.html',
  styleUrls: ['./dispatchlog.component.css']
})
export class DispatchlogComponent implements OnInit {
dispatchLogs: DispatchLog[];
  constructor(private _logService: DispatchlogService) { }

  ngOnInit() {
this._logService.getDispatchlogs().subscribe(data =>{

this.dispatchLogs = data;
},
  error =>{   console.error(error) }
  );
  }

}
