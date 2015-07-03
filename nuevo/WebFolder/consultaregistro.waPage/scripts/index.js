
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button9 = {};	// @button
	var button4 = {};	// @button
	var button1 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button9.click = function button9_click (event)// @startlock
	{// @endlock
		sources.mascota.query('NombreDeMascota begin :1',myQueryB);
	};// @lock

	button4.click = function button4_click (event)// @startlock
	{// @endlock
		sources.mascota.query('ApellidoDelPropietario begin :1',myQueryA);
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		sources.mascota.query('NombreDelPropietario begin :1',myQuery);
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button9", "click", button9.click, "WAF");
	WAF.addListener("button4", "click", button4.click, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
// @endregion
};// @endlock
