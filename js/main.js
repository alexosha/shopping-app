$(document).ready(function(){
	$("button.add").click(function() {
    var new_item = $("input.add-item").val();
    $( "ul.list" ).append("<li>"+new_item+"</li>");
    return false;
    
     });
});
// <label><input type="checkbox" value="None" id="squaredTwo" name="check" />
//</label>