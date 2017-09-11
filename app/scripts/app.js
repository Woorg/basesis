import svg4everybody from 'svg4everybody';
// import $ from 'jquery';
// import 'inputmask';


(function ($) {

	$(function () {
		svg4everybody();

		var inputmask_f900a78e = {
			"mask": ["+9-999-999-9999", "+99-999-999-9999", "+999-999-999-9999"]
		};
		$("#emailphoneform-phone").inputmask(inputmask_f900a78e);

		// $('.main__col').matchHeight({
		// });

		// jQuery('#contact-form').yiiActiveForm([{
		// 	"id": "emailphoneform-email",
		// 	"name": "email",
		// 	"container": ".field-emailphoneform-email",
		// 	"input": "#emailphoneform-email",
		// 	"enableAjaxValidation": true,
		// 	"validate": function(attribute, value, messages, deferred, $form) {
		// 		yii.validation.required(value, messages, {
		// 			"message": "Необходимо заполнить «Email»"
		// 		});
		// 		yii.validation.email(value, messages, {
		// 			"pattern": /^[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/,
		// 			"fullPattern": /^[^@]*<[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?>$/,
		// 			"allowName": false,
		// 			"message": "Значение «Email» не является правильным email адресом.",
		// 			"enableIDN": false,
		// 			"skipOnEmpty": 1
		// 		});
		// 		yii.validation.string(value, messages, {
		// 			"message": "Значение «Email» должно быть строкой.",
		// 			"max": 50,
		// 			"tooLong": "Значение «Email» должно содержать максимум 50 символов.",
		// 			"skipOnEmpty": 1
		// 		});
		// 	}
		// }, {
		// 	"id": "emailphoneform-phone",
		// 	"name": "phone",
		// 	"container": ".field-emailphoneform-phone",
		// 	"input": "#emailphoneform-phone",
		// 	"enableAjaxValidation": true,
		// 	"validate": function(attribute, value, messages, deferred, $form) {
		// 		yii.validation.required(value, messages, {
		// 			"message": "Необходимо заполнить «Телефон»"
		// 		});
		// 		yii.validation.string(value, messages, {
		// 			"message": "Значение «Телефон» должно быть строкой.",
		// 			"max": 50,
		// 			"tooLong": "Значение «Телефон» должно содержать максимум 50 символов.",
		// 			"skipOnEmpty": 1
		// 		});
		// 	}
		// }], []);
		// var checkbox = $('#newsletter_agreement')[0];
		// if (checkbox != undefined) {
		// 	checkbox.checked = true;
		// }
		// jQuery("#callbackform-phone").inputmask(inputmask_f900a78e);
		// jQuery('#callback-form').yiiActiveForm([], []);
		// var _ouibounce = ouibounce(false, {
		// 	aggressive: true,
		// 	sensitivity: 40,
		// 	callback: function() {
		// 		$('#ComebackUserModal').modal('show');
		// 	}
		// });






	});

})(jQuery);




