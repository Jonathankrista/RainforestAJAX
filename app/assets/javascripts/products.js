// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

// $(document).on('page:load ready', function() {
  // function display_search_results() {
  //   // readyState === 4 means that the asynchronous request completed successfully
  //   if (this.readyState === 4) {
  //     console.log(this);
  //     document.getElementById('products').innerHTML = this.responseText;
  //   }
  // }

  // var form = document.getElementById('search-form');

  // form.addEventListener('submit', function(event) {
  //   event.preventDefault();

  //   var searchValue = document.getElementById('search').value;

  //   var xhr = new XMLHttpRequest();  // XHR
  //   xhr.onload = display_search_results;
  //   xhr.open('GET', '/products?search=' + searchValue, true);
  //   xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  //   xhr.send();
  // });

	// $('#search-form').on('submit', function(e) {
	// 	e.preventDefault();

		// $.ajax({
		// 	url: '/products?search=' + $('#search').val(),
		// 	type: 'GET',
		// 	dataType: 'html',
		// 	success: function(data) {
		// 		// This code runs when the response is received
		// 		if ( data ) {
		// 			$('#products').html(data);
		// 		}
		// 	}
		// });

		// $.ajax({
		// 	url: '/products?search=' + $('#search').val(),
		// 	type: 'GET',
		// 	dataType: 'script'
		// });

		// This is functionally equivalent to the above
		// $.getScript('/products?search=' + $('#search').val());
	});







$(document).on('ready page:load', function() {
  $('#search-form').submit(function(event) {
    event.preventDefault();
    var searchValue = $('#search').val();

    $.getScript('/products?search=' + searchValue);
  });

   $(window).scroll(function() {
      var url = $('.pagination span.next').children().attr('href');
      if (url && $(window).scrollTop() > $(document).height() - $(window).height() - 50) {
        $('.pagination').text("Fetching more products...");
        return $.getScript(url);
      }
   });
});