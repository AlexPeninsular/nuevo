﻿
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button6 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button6.click = function button6_click (event)// @startlock
	{// @endlock
		sources.mascota.save({
			onSucces:function(event)
		{
			sources.mascota.addEntity(sources.mascota.getCurrentElement());
			
		}
		
	});
	
		alert('Mascota ingresada!');
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button6", "click", button6.click, "WAF");
// @endregion
};// @endlock
