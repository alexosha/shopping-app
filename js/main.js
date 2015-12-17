$(document).ready(function(){
	$("button.add").click(function() {
    	var new_item = $("input.add-item").val();
    	$( "ul.list" ).append("<li id='"+new_item+"'>"+new_item+"</li>");
    	$( ".remove-item" ).append("<option>"+new_item+"</option>");
    	return false;
    
     });
	$('ul').on('click', 'li', function(event){
  $(this).toggleClass("strike-through");
});
	$('button.remove').click(function() {
		var removal_id = $('.remove-item option:selected').text();
		$('.remove-item option:selected').remove();
		$('#'+removal_id).remove();
	});
});