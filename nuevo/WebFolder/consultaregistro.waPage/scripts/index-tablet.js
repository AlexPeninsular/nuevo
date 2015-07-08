
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var mascotaEvent = {};	// @dataSource
	var button8 = {};	// @button
	var button4 = {};	// @button
	var button3 = {};	// @button
	var button1 = {};	// @button
	var button2 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	mascotaEvent.onElementSaved = function mascotaEvent_onElementSaved (event)// @startlock
	{// @endlock
		alert('al fin!');
// Add your code here
	};// @lock

	button8.click = function button8_click (event)// @startlock
	{// @endlock
		if (confirm("Estas seguro que desea eliminar a la mascota "+sources.mascota.NombreDeMascota+" de "+sources.mascota.NombreDelPropietario+" "+sources.mascota.ApellidoDelPropietario+"?")){
		sources.mascota.remove();
	
		alert('Mascota Elimada!');
		
		}
		else(	alert('Mascota NO Eliminada!'));
	
			
	// Add your code here
	};// @lock

	button4.click = function button4_click (event)// @startlock
	{// @endlock
		if (confirm("Estas seguro que desea guardar las modificaciones hechas en la mascota "+sources.mascota.NombreDeMascota+" de "+sources.mascota.NombreDelPropietario+" "+sources.mascota.ApellidoDelPropietario+"?")){
		sources.mascota.save();
	
		alert('Datos de mascota modificados!');
		
		}
		else(	alert('Datos de mascota no modificados!'));
			
			
			
		
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
	WAF.addListener("mascota", "onElementSaved", mascotaEvent.onElementSaved, "WAF");
	WAF.addListener("button8", "click", button8.click, "WAF");
	WAF.addListener("button4", "click", button4.click, "WAF");
	WAF.addListener("button3", "click", button3.click, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("button2", "click", button2.click, "WAF");
// @endregion
};// @endlock
