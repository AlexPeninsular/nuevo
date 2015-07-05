
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button4 = {};	// @button
	var button3 = {};	// @button
	var button1 = {};	// @button
	var button2 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button4.click = function button4_click (event)// @startlock
	{// @endlock
		alert('GUARDADO!');
	};// @lock

	button3.click = function button3_click (event)// @startlock
	{// @endlock
		sources.mascota.query('NombreDeMascota begin :1',myQueryB);
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		sources.mascota.query('NombreDelPropietario begin :1',myQuery);
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		sources.mascota.query('ApellidoDelPropietario begin :1',myQueryA);
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button4", "click", button4.click, "WAF");
	WAF.addListener("button3", "click", button3.click, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("button2", "click", button2.click, "WAF");
// @endregion
};// @endlock
