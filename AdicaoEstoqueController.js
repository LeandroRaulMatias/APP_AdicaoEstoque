({
	handleSuccess : function(component, event, helper) {     
        /*
        	toastEvent -> uma biblioteca de mensagem personalizada 
            $A-> é uma biblioteca do Aura -> showToast
        */
        var toastEvent = $A.get("e.force:showToast");
       	//montar a mensagem de alerta do Toast
       	//usando a variável toastEvent
       	// atribuir valores para title, message e type
       	// setParams ->> atribuir valores para a mensagem, em um objeto
        toastEvent.setParams({
            'title' : 'Feito!',
            'message' : 'Estoque adicionado com Sucesso!!! =D',
            'type' : 'success'
        });
        //disparar a mensagem montada
        toastEvent.fire();
        
	},//Reseta ou apaga as informações adicionadas nos campos
    handleReset: function(cmp) {
        cmp.find('field').forEach(function(f) {
            f.reset();
        });
    }
})
