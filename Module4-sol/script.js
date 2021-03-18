var names=new Array();
names[0]="Narmada";
names[1]="Jessie";
names[2]="John";
names[3]="james";
names[4]="Prince";
names[5]="Harry";
names[6]="Shiva";
names[7]="Amy";
names[8]="Lisa";
names[9]="jasmine";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}