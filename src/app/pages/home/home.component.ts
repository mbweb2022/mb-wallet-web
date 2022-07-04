import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'mnb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    const script = document.createElement('script');
    script.src = 'assets/js/home.js';
    script.async = false;
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);
  }
  openDialogSMO() {
    const dialogRef = this.dialog.open(BiographySMO);
    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog Result', result);
    });
  }
  openDialogJC() {
    const dialogRef = this.dialog.open(BiographyJC);
    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog Result', result);
    });
  }
  openDialogMAV() {
    const dialogRef = this.dialog.open(BiographyMAV);
    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog Result', result);
    });
  }
  openDialogWTU() {
    const dialogRef = this.dialog.open(BiographyWTU);
    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog Result', result);
    });
  }
  openDialogFE() {
    const dialogRef = this.dialog.open(BiographyFE);
    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog Result', result);
    });
  }
  openDialogRCA() {
    const dialogRef = this.dialog.open(BiographyRCA);
    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog Result', result);
    });
  }
}
@Component({
  selector: 'biography-SMO',
  templateUrl: './biography-SMO.html',
  styleUrls: ['./home.component.scss'],

})
export class BiographySMO {}
@Component({
  selector: 'biography-JC',
  templateUrl: './biography-JC.html',
  styleUrls: ['./home.component.scss'],

})
export class BiographyJC {}
@Component({
  selector: 'biography-MAV',
  templateUrl: './biography-MAV.html',
  styleUrls: ['./home.component.scss'],

})
export class BiographyMAV {}
@Component({
  selector: 'biography-WTU',
  templateUrl: './biography-WTU.html',
  styleUrls: ['./home.component.scss'],

})
export class BiographyWTU {}
@Component({
  selector: 'biography-FE',
  templateUrl: './biography-FE.html',
  styleUrls: ['./home.component.scss'],

})
export class BiographyFE {}
@Component({
  selector: 'biography-RCA',
  templateUrl: './biography-RCA.html',
  styleUrls: ['./home.component.scss'],

})
export class BiographyRCA {}
