var _style = "btn-default btn-primary btn-success btn-info btn-warning btn-danger";
var _size = "btn-lg btn-sm btn-xs";
var _link = "";
var _text = "按钮";
function getBtn(){
	var _class = "btn " + _style;
	if(_size.length>0) _class += " " + _size;
	_class = '"' + _class + '"';
	var _href = '"'+_link+'"';
	return '<a href='+_href+' class='+_class+'>'+_text+'</a>';
}
$(function(){
	var _a = $("#btn a");
	_a.on("click",function(){
		return false;
	});
	$("button#ok").on("click",function(){
		editor.execCommand("insertHTML",$("#btn").html());
		dialog.close();
	});
	$("input[name=style]").on("change",function(){
		_a.removeClass(_style).addClass($(this).val());
	});
	$("input[name=size]").on("change",function(){
		_a.removeClass(_size).addClass($(this).val());
	});
	$("input[name=block]").on("change",function(){
		if($(this).is(":checked")){
			_a.addClass("btn-block");
		}
		else{
			_a.removeClass("btn-block");
		}
	});
	$("input[name=link]").on("change",function(){
		_a.attr("href",$(this).val());
	});
	$("input[name=text]").on("change",function(){
		_a.html($(this).val());
	});
});