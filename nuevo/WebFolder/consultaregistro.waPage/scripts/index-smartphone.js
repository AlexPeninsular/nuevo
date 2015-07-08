
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var mascotaEvent = {};	// @dataSource
	var BORRAR = {};	// @button
	var button2 = {};	// @button
	var button6 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	mascotaEvent.onElementSaved = function mascotaEvent_onElementSaved (event)// @startlock
	{// @endlock
		
		alert('CONFIRMADO: Datos Guardados!');
	};// @lock

	BORRAR.click = function BORRAR_click (event)// @startlock
	{// @endlock
		
		if (confirm("Estas seguro que desea eliminar a la mascota "+sources.mascota.NombreDeMascota+" de "+sources.mascota.NombreDelPropietario+" "+sources.mascota.ApellidoDelPropietario+"?")){
		sources.mascota.remove();
	
		alert('Mascota Elimada!');
		
		}
		else(	alert('Mascota NO Eliminada!'));
	
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		
		if (confirm("Estas seguro que desea guardar las modificaciones hechas en la mascota "+sources.mascota.NombreDeMascota+" de "+sources.mascota.NombreDelPropietario+" "+sources.mascota.ApellidoDelPropietario+"?\n Espera el mensaje de CONFIRMACION o cancela")){
		sources.mascota.save();
	
		
		}
		else(	alert('Datos de mascota no modificados!'));
			
			
	
	};// @lock

	button6.click = function button6_click (event)// @startlock
	{// @endlock
		sources.mascota.query('NombreDeMascota begin :1 OR NombreDelPropietario begin :1 OR ApellidoDelPropietario begin :1',myQuery);
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("mascota", "onElementSaved", mascotaEvent.onElementSaved, "WAF");
	WAF.addListener("BORRAR", "click", BORRAR.click, "WAF");
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("button6", "click", button6.click, "WAF");
// @endregion
};// @endlock
