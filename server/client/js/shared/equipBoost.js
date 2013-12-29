
//Boost that grants a custom advanced special effect to a player. 
initUniqueBoostDb = function(){
	uniqueBoostDb = {}; var b = uniqueBoostDb;
	
	/*
	b.balancedAtk = {
		'name':'Balanced Attack',
		'description':'For each element, your damage mastery is equal to the lowest of the 4 damage masteries.',
		'icon':'offensive.melee',
		'function':(function(pb,key){
			var mod;
			var pbl = pb.list;
			var array = ['x','*','^','+'];
			for(var i in elementCName){
				var min = 100000;
				for(var j in array){
					if(j == 3){ mod = 1; } else { mod = 0; }
					min = Math.min(min,pbl['dmg-' + i + '-' + array[j]].base + mod);
				}
				for(var j in array){
					if(j == 3){ mod = 1; } else { mod = 0; }
					pbl['dmg-' + i + '-' + array[j]].base = min-mod;
				}		
			}
		})
	}
	*/
	b.balancedAtk = {
		'name':'Risk Taker',
		'description':'x2 Life Leech. Cannot use Potions.',
		'icon':'offensive.melee',
		'function':(function(pb,key){
			var mod;
			var pbl = pb.list;
			var array = ['x','*','^','+'];
			for(var i in elementCName){
				var min = 100000;
				for(var j in array){
					if(j == 3){ mod = 1; } else { mod = 0; }
					min = Math.min(min,pbl['dmg-' + i + '-' + array[j]].base + mod);
				}
				for(var j in array){
					if(j == 3){ mod = 1; } else { mod = 0; }
					pbl['dmg-' + i + '-' + array[j]].base = min-mod;
				}		
			}
		})
	}
}

