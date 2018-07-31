'use strict';

var hooks = {
	afterAbeAttributes: function afterAbeAttributes(obj, str, json, abe) {
		obj.calendar = abe.cmsData.regex.getAttr(str, 'calendar')
		return obj
	},
	afterEditorInput: function afterEditorInput(htmlString, params, abe) {
		if(params.calendar === 'true') {
			htmlString = htmlString + '<script type="text/javascript">';
			htmlString += 'jQuery(function () {';
			htmlString += `jQuery('[data-id="${params.key}"]').datetimepicker();`;
			htmlString += '});';
			htmlString += '</script>';

		}

		return htmlString;
	}
};

exports.default = hooks;
