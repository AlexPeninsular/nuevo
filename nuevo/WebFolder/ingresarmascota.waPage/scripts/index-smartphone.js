
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var mascotaEvent = {};	// @dataSource
	var button1 = {};	// @button
	var button2 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	mascotaEvent.onElementSaved = function mascotaEvent_onElementSaved (event)// @startlock
	{// @endlock
		alert('CONFIRMADO: nueva mascota almacenada en la lista!! ');
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		alert('Ingrese los datos en el formulario!');
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		
		
		
		if (confirm("Deseas almacenar a: "+sources.mascota.NombreDeMascota+" de "+sources.mascota.NombreDelPropietario+" "+sources.mascota.ApellidoDelPropietario+"?\n Espera el mensaje de CONFIRMACION o cancela")){
		sources.mascota.save();
	
		
		}
		else(	alert('Mascota no Almacenada!'));
		
	
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("mascota", "onElementSaved", mascotaEvent.onElementSaved, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("button2", "click", button2.click, "WAF");
// @endregion
};// @endlock
