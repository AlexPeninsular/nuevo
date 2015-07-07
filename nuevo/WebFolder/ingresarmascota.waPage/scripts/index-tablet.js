
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button2 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		sources.mascota.save({
			onSucces:function(event)
		{
			sources.mascota.addEntity(sources.mascota.getCurrentElement());
			
		}
		
	});
	
		alert('Mascota ingresada!');
		// Add your code here
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button2", "click", button2.click, "WAF");
// @endregion
};// @endlock
