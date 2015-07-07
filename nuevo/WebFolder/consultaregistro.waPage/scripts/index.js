
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button2 = {};	// @button
	var button10 = {};	// @button
	var button9 = {};	// @button
	var button4 = {};	// @button
	var button1 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		
		if (confirm("Estas seguro que desea eliminar a la mascota "+sources.mascota.NombreDeMascota+" de "+sources.mascota.NombreDelPropietario+" "+sources.mascota.ApellidoDelPropietario+"?")){
		sources.mascota.remove();
	
		alert('Mascota Elimada!');
		
		}
		else(	alert('Mascota NO Eliminada!'));
	
	};// @lock

	button10.click = function button10_click (event)// @startlock
	{// @endlock
		
	if (confirm("Estas seguro que desea guardar las modificaciones hechas en la mascota "+sources.mascota.NombreDeMascota+" de "+sources.mascota.NombreDelPropietario+" "+sources.mascota.ApellidoDelPropietario+"?")){
		sources.mascota.save();
	
		alert('Datos de mascota modificados!');
		
		}
		else(	alert('Datos de mascota no modificados!'));
		
		
		
	};// @lock

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
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("button10", "click", button10.click, "WAF");
	WAF.addListener("button9", "click", button9.click, "WAF");
	WAF.addListener("button4", "click", button4.click, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
// @endregion
};// @endlock
