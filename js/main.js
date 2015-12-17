$(document).ready(function(){
	$("button.add").click(function() {
    	var new_item = $("input.add-item").val();
    	$( "ul.list" ).append("<li>"+new_item+"</li>");
    	return false;
    
     });
	$('ul').on('click', 'li', function(event){
  $("li").toggleClass("strike-through");
});
});
// <label><input type="checkbox" value="None" id="squaredTwo" name="check" />
//</label>
//$("li").click(function(){
	//	$("li").toggleClass("strike-through");
	//});