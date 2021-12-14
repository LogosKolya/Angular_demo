import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public showModalOne = true;
  public showModalTwo = true;
  public showModalThree = true;
  public newName!: string;
  public newPassword!: string;
  public newEmail!: string;
  public testName = true;
  public testPass = true;
  public testEmail = true;
  public Name = /^[A-Za-z]{4,16}$/;
  public Password = /^[\w._-]{4,16}$/;
  public Email = /^\w[\w-.]*\w[@][A-Za-z]+[.][A-Za-z]+$/;
  public showButtons = true;
  public statusDis = true;
  public elem = {name: '', pass: '', email: ''};
  public valuesElem = [this.elem];
  public user!: object;
  public userAge!: string;
  public userName!: string;
  public editIndex!: number;

  constructor() { }
  ngOnInit(): void {
    this.valuesElem.splice(0, 1);
  }

  addUser(): void {
    this.elem = {name: this.newName, pass: this.newPassword, email: this.newEmail};
    this.valuesElem.push(this.elem);
    this.newName = '';
    this.newPassword = '';
    this.newEmail = '';
    this.statusDis = true;
  };

  saveEditUser(): void {
    this.valuesElem[this.editIndex].name = this.newName;
    this.valuesElem[this.editIndex].pass = this.newPassword;
    this.valuesElem[this.editIndex].email = this.newEmail;
    this.newName = '';
    this.showButtons = true;
    this.statusDis = true;
    this.newName = '';
    this.newPassword = '';
    this.newEmail = '';
  };

  editUser(index: number): void {
    this.newName = this.valuesElem[index].name;
    this.newPassword = this.valuesElem[index].pass;
    this.newEmail = this.valuesElem[index].email;
    this.editIndex = index;
    this.showButtons = false;
  };

  deleteUser(index: number): void {
    this.valuesElem.splice(index, 1);
  };

  checkName(): void {
    this.testName = this.Name.test(this.newName);
    if(this.testName && this.testPass && this.testEmail && this.newName != '' && this.newPassword != '' && this.newEmail != '') {
      this.statusDis = false;
    }
  };

  checkPass(): void {
    this.testPass = this.Password.test(this.newPassword);
    if(this.testName && this.testPass && this.testEmail && this.newName != '' && this.newPassword != '' && this.newEmail != '') {
      this.statusDis = false;
    }
  };

  checkEmail(): void {
    this.testEmail = this.Email.test(this.newEmail);
    if(this.testName && this.testPass && this.testEmail && this.newName != '' && this.newPassword != '' && this.newEmail != '') {
      this.statusDis = false;
    }
  };

}
