import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-type',
  templateUrl: './type.page.html',
  styleUrls: ['./type.page.scss'],
})
export class TypePage implements OnInit {

	constructor(private modalController: ModalController) {}

	ngOnInit() {
	}

	dismiss() {
	    this.modalController.dismiss({
	    	'dismissed': true
	    });
  	}
}
