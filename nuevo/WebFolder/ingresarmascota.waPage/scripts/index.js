
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var mascotaEvent = {};	// @dataSource
	var button5 = {};	// @button
	var button6 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	mascotaEvent.onElementSaved = function mascotaEvent_onElementSaved (event)// @startlock
	{// @endlock
		alert('CONFIRMADO: nueva mascota almacenada en la lista!! ');
	};// @lock

	button5.click = function button5_click (event)// @startlock
	{// @endlock
		alert('Ingrese los datos en el formulario!');
	};// @lock

	button6.click = function button6_click (event)// @startlock
	{// @endlock
		
		
		if (confirm("Deseas almacenar a: "+sources.mascota.NombreDeMascota+" de "+sources.mascota.NombreDelPropietario+" "+sources.mascota.ApellidoDelPropietario+"?\n Espera el mensaje de CONFIRMACION o cancela")){
		sources.mascota.save();
	
		
		}
		else(	alert('Mascota no Almacenada!'));
		
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("mascota", "onElementSaved", mascotaEvent.onElementSaved, "WAF");
	WAF.addListener("button5", "click", button5.click, "WAF");
	WAF.addListener("button6", "click", button6.click, "WAF");
// @endregion
};// @endlock
