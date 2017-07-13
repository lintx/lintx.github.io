(function(){
	"use strict";
	var app = angular.module("app",['ng.ueditor']);
	app.controller('appCtr',['$scope',function($scope){
		$scope.data = {
			content:'<p>ueditor</p><p><img src="//www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" /></p>'
		};
	}]);
	var name = "lintx-image-install",title = "插入图片";
    UEDITOR_CONFIG.toolbars[0].push(name);
	
	var editorui = baidu.editor.ui;
	var domUtils = UE.dom.domUtils;

    app.directive("ueditorImageSelectDirective",[function () {
        return {
            restrict: "C",
            controller:["$scope",function ($scope) {
                $scope.onSelectImage = function () {
                    $scope.editor.execCommand('inserthtml', '<img src="//www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" />');
                }
            }]
        };
    }]);
	
	editorui[name] = function (editor) {
        var ui = new editorui.Button({
            editor:editor,
            className:'edui-for-simpleupload ',
            title:editor.options.labelMap[name] || editor.getLang("labelMap." + name) || title || name || '',
            getHtmlTpl: function () {
                return '<div id="##" class="edui-box %%">' +
                    '<div id="##_state" stateful>' +
                    '<div class="%%-wrap"><div id="##_body" unselectable="on" ' + (this.title ? 'title="' + this.title + '"' : '') +
                    ' class="%%-body ueditor-image-select-directive" onmousedown="return $$._onMouseDown(event, this);" data-ng-click="onSelectImage()">' +
                    (this.showIcon ? '<div class="edui-box edui-icon"></div>' : '') +
                    (this.showText ? '<div class="edui-box edui-label">' + this.label + '</div>' : '') +
                    '</div>' +
                    '</div>' +
                    '</div></div>'
            }
        });
		return ui;
	};
})();