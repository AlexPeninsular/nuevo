
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button1 = {};	// @button
	var button2 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		alert('Ingrese los datos en el formulario!');
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		
		
		waf.sources.mascota.save({
			onSuccess: function(event) {
				$$('messageText').setValue("Mascota Guardada.");
			},
			onError: function(error){
				$$('messageText').setValue(error.error[0].message);
			}
		});
		
		
		/*
		sources.mascota.save({
			onSucces:function(event)
		{
			sources.mascota.addEntity(sources.mascota.getCurrentElement());
			
		}
		
	});
	
		alert('Mascota ingresada!');
		*/
		// Add your code here
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("button2", "click", button2.click, "WAF");
// @endregion
};// @endlock
