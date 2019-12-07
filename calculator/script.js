window.onload = function(){
	var keys = document.querySelectorAll('.key');
	var buffer = 0;
	var number = '0';
	var res = 0;
	var nextAction = '';
	var aqctionTrigger = false;
	screen();
	for (let i = 0; i<keys.length; i++){
		if(/[0-9.]/.exec(keys[i].innerHTML)){
			keys[i].addEventListener('click', typeSymbol);
		} else {
			keys[i].addEventListener('click', doIt)
			}
	}
	function screen (){
		document.querySelector('.screen').innerHTML = '<p>' + number + '</p>';
	}
	function typeSymbol(){
		let symbol = this.dataset.key;
		console.log('symbol: ' + symbol + ' number.length: ' + number.length + ' number = ' + number);
		console.log('symbol: ' + symbol + ' aqctionTrigger: ' + aqctionTrigger + ' number: ' + number + ' res: ' + res);
		if ((symbol === 'dot') && !number.includes('.') && (number.length < 14)){
				number += '.';
		} else 
		if (symbol != 'dot' && number.length < 14 ){

			if (number === '0' ){
				number = symbol;
			} else  
			if (aqctionTrigger) {

				number = symbol;
				aqctionTrigger = false;
			} else
			number += symbol;
			
		} else  {
			console.log('symbol: ' + symbol + ' aqctionTrigger: ' + aqctionTrigger + ' number: ' + number + ' res: ' + res);
			return;
		}  
		

		screen();
	}
	function calc(action){

		switch (nextAction){
			case '':
				res = buffer;
				console.log('action:' + action);
				console.log('res = ' + res);
				nextAction = action;
				break;
			case 'plus':
				res += buffer;
				nextAction = action;
				console.log('action:' + action);
				console.log('res = ' + res);
				break;	 
			case 'minus':
				res -= buffer;
				nextAction = action;
				console.log('action:' + action);
				console.log('res = ' + res);
				break;
			case 'mult':
				res *= buffer;
				nextAction = action;
				console.log('action:' + action);
				console.log('res = ' + res);
				break;		
			case 'div':
				res /= buffer;
				nextAction = action;
				console.log('action:' + action);
				console.log('res = ' + res);
				break;
			case 'res':
				nextAction = action;
				 break;	
		}


	}
	function doIt(){
		let action = this.dataset.key;
		switch (action) {
			case 'clear':
				number = '0';
				break; 	
			case 'clear-all':
				number = '0';
				buffer = 0;
				res = 0;
				break; 	
			case 'del':
				if (number.length>1){
				number = number.slice(0, number.length-1);
				} else number = '0';
				break; 	
			case 'plus':
			case 'minus':
			case 'mult':
			case 'div':
			case 'res':
				buffer = parseFloat(number);
				calc(action);
				number = String(res);
				aqctionTrigger = true;
				break;
			default:
			number = '0';
		}					
		screen();
	}

}