$(function(){

	openWindow();
	clickClose();

	function openWindow(){
		$('.submit-btn').click(function(e){
			e.stopPropagation();
			$('.background-cg').fadeIn();
		});
	}

	function clickClose(){

		var el = $('body,.close-btn');

		el.click(function(){
			$('.background-cg').fadeOut(); 
		})

		$('.form-wrapper').click(function(e){
			e.stopPropagation();
		})
	}

	$('input[type=text]').focus(function(){
		invalidFieldReset($(this));
	})
	

	$('form#formOne').submit(function(e){
		//e.preventDefault();
		var name = $('input[name=name]').val();
		var phone = $('input[name=phone]').val();
		var email = $('input[name=email]').val();

		if(verifyName(name) == false){
			invalidFieldApply($('input[name=name]'));
			return false;
		}else if(verifyPhone(phone) == false){
			invalidFieldApply($('input[name=phone]'));
			return false;
		}else if(verifyEmail(email) == false){
			invalidFieldApply($('input[name=email]'));
			return false;
		}else{
			alert("Formulário enviado com sucesso!");
		}
	})

	function invalidFieldApply(el){
			el.css('color','red');		
			el.css('border','2px solid red');
			el.val('Campo Inválido!');
	}

	function invalidFieldReset(el){
			el.css('color','#ccc');		
			el.css('border','1px solid #ccc');
			el.val('');
	}

		function verifyName(name){
		if(name == ''){
			return false;
		}
		var amount = name.split(' ').length;
		var splitStr = name.split(' ');
		if(amount >= 2){
			for(var i = 0; i < amount; i++){
				if(splitStr[i].match(/^[A-Z]{1}[a-z]{1,}$/)){
					
				}else{
					return false;
				}
			}
		}else{
			return false;
		}
	}

	function verifyPhone(phone){
		if(phone == ''){
			return false;
		}

		/*if(phone.match(/^\([0-9]{2}\)[0-9]{4}-[0-9]{4}$/) == null){
			return false;
		}*/ //Arrumar a lógica disso daqui...
	}

	function verifyEmail(email){
		if(email == '')
			return false

		if(email.match(/^([a-z0-9-_.]{1,})+@+([a-z.]{1,})$/) == null){
			return false;
		}
	}
});