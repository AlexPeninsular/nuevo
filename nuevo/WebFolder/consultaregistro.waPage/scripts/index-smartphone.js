
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button6 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button6.click = function button6_click (event)// @startlock
	{// @endlock
		sources.mascota.query('NombreDeMascota begin :1 OR NombreDelPropietario begin :1 OR ApellidoDelPropietario begin :1',myQuery);
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button6", "click", button6.click, "WAF");
// @endregion
};// @endlock
