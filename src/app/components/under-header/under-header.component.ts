import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-under-header',
  templateUrl: './under-header.component.html',
  styleUrls: ['./under-header.component.scss']
})
export class UnderHeaderComponent implements OnInit {

  public menu: any = [
    {name: 'Cenzor', checked: false, link: "/works/cenzor" },
    {name: 'Users', checked: false, link: "/works/users" },
    {name: 'Task', checked: false, link: "/works/task"}
  ];
  public previous = 3;
  public showEdit: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  checked(index: number): void {
    this.menu[index].checked=true;
    if (this.previous >= 3) {
      this.previous = index;
    }
    else {
      this.menu[this.previous].checked=false;
    this.previous = index;
    }
  }

  nullingCheck(): void{
    this.showEdit = false;
    for (let i = 0; i<=2; i++) {
      this.menu[i].checked = false;
    }
    this.showEdit = false;
  }

}
