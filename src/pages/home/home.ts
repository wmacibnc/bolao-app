import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	searchQuery: string = '';
	items = [];

	constructor(public navCtrl: NavController) {
		this.initializeItems();
	}


	getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
    	this.items = this.items.filter((item) => {
    		return (item[0].toLowerCase().indexOf(val.toLowerCase()) > -1);
    	})
    }
}

goBack(item){
	this.navCtrl.push('DetalhePage', { item: item });
}

initializeItems() {
	this.items = [
	['DN MURILO',1,5,9,13,17,23,27,33,41,45,46,48,50,54,66,68,70,74,78,80],
	['ELOI LOTERICA',1,2,5,9,14,15,16,25,27,30,33,36,40,45,49,50,76,77,79,80],
	['JG RACAM M',3,5,7,9,10,12,14,15,16,23,24,27,30,35,41,46,54,62,74,78],
	['JM NEY',1,2,4,5,6,9,11,12,13,14,15,23,27,33,40,42,50,51,70,75],
	['LC R CARLOS II',2,7,8,13,16,17,18,19,20,22,23,25,33,44,49,50,54,78,79,80],
	['RONALDO/TOINZÉ',1,2,5,7,9,10,11,12,13,14,16,20,22,23,27,50,51,52,76,77],
	['TA MARCELA',1,2,3,4,5,6,7,9,10,11,12,15,16,17,18,19,20,22,24,25],
	['AI CRIS',2,4,7,8,9,10,12,13,16,17,18,19,20,22,33,40,44,74,75,77],
	['APOLO XI',1,4,7,9,10,13,15,27,29,33,34,42,46,48,50,53,59,67,74,79],
	['CP CHIQUINHA',1,3,4,5,7,8,9,10,12,17,30,31,35,36,46,50,53,64,67,80],
	['CP LEANDRO/PAULO',2,7,11,13,14,15,17,19,23,24,40,42,47,52,63,65,67,70,72,80],
	['DN CÉLIA I',1,5,7,10,12,13,19,21,27,30,33,36,41,46,52,58,64,66,77,80],
	['EC VIDAL',1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
	['IB SOUZINHA',1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
	['IB SUED',1,3,7,8,9,10,11,12,13,14,15,16,17,20,24,38,44,77,78,79],
	['J MONTE ALEGRE',5,7,12,13,20,23,27,33,37,42,45,46,52,53,62,67,71,77,79,80],
	['JF JOSÉ FILHO IX',1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
	['LC GAS FELIPE',1,2,5,13,17,18,19,20,22,23,24,33,35,37,42,44,49,55,74,80],
	['LC JULIO CESAR',2,4,8,9,11,13,14,15,20,23,28,35,51,58,60,67,71,74,77,80],
	['LC MR I',2,4,5,8,11,13,16,17,20,22,25,33,36,38,44,48,54,70,74,78]
	];

	var a = [5,9,19,24,49];
	var b = [40,46,58,64,80];
	var c = [12,14,25,58,68];
	var d = [41,58,70,71,80];
	var e = [1,19,22,27,35];
	var f = [23,42,64,72,79];
	var g = [1,4,35,36,68];
	var h = [2,13,16,42,67];
	var i = [7,11,49,50,78];
	var j = [13,22,46,70,77];
	var k = [2,7,20,53,79];
	var l = [17,20,27,33,71];
	var m = [19,23,68,74,80];
	var n = [10,15,19,36,54];

	var concursos = a.concat(b,c,d,e,f,g,h,i,j,k,l,m,n);

	concursos = concursos.filter(function (item, pos) {return concursos.indexOf(item) == pos});

	for (var j = 0; j < this.items.length; j++) {
		for (var k = 1; k <=21; k++) {
			for (var i = 0; i < concursos.length; i++) {
				if(this.items[j][k] == concursos[i]){
					if(!this.items[j][22]){
						this.items[j][22] = 0;
					}
					this.items[j][22] = this.items[j][22] + 1;
				}
			}
		}
		this.items[j][23] = j+1;
	}
}

}
