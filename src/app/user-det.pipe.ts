import { Pipe, PipeTransform, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Pipe({
  name: 'userDet'
})
export class UserDetPipe implements PipeTransform, OnInit {
  ngOnInit(): void {
    this.users$ = this.users$ as Array<Object>;
  }
  constructor(private data: DataService) {
    this.data.getUsers().subscribe(
      data => this.users$ = data
    )

  }
  users$: any;
  transform(UID: number, Prop: string): any {
    try {
      let user: Object = this.users$.filter(x => x.id == UID);
      return user[0][Prop];
    }
    catch {
      return "";
    }
  }

}
