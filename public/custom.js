$(document).ready(function() {
 // hides the slickbox as soon as the DOM is ready
  $('#slickbox').hide();
 // shows the slickbox on clicking the noted link  
  $('#slick-show').click(function() {
    $('#slickbox').show('slow');
    return false;
  });
 // hides the slickbox on clicking the noted link  
  $('#slick-hide').click(function() {
    $('#slickbox').hide('fast');
    return false;
  });
 
 // toggles the slickbox on clicking the noted link  
  $('#slick-toggle').click(function() {
    $('#slickbox').toggle(400);
    return false;
  });

 // radio toggle

  $("input[name$='creation_type']").click(function() {
     var test = $(this).val();
     $("div.desc").hide();
     $('#' + test).show();
  });
	
	// auto submit serverlist form
	$("#server").change(function() {
     this.form.submit();
 });
	// ask if we are sure to delete
	function check() {
  apprise("Are you sure?", {'verify': true}, function(r)
          { if(r) { $("#delete-form").submit(); }  });}

	$("#delete").click(function(event) {
     event.preventDefault();
 		 check();
	});     
	
});

$.ajaxSetup ({
  cache: false
});
var ajax_load = "<img src='images/ajax-loader.gif' alt='loading...' />";

//  load() functions
var loadUrl = "ajax/responce";
$("#load_basic").click(function(){
  $("#result").html(ajax_load).load(loadUrl);
});

