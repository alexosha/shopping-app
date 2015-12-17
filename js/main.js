$(document).ready(function(){
	$("button.add").click(function() {
    	var new_item = $("input.add-item").val();
    	$( "ul.list" ).append("<li>"+new_item+"</li>");
    	$( "select.remove-item" ).append("<option>"+new_item+"</option>");
    	return false;
    
     });
	$('ul').on('click', 'li', function(event){
  $(this).toggleClass("strike-through");
});
	$("option.remove-existing").click(function(){

	});
});
// <label><input type="checkbox" value="None" id="squaredTwo" name="check" />
//</label>
//$("li").click(function(){
	//	$("li").toggleClass("strike-through");
	//});