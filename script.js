function animateMenu(menu) {
  menu.classList.toggle('change')
}

$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    items: 1
  })

  $('#menu-icon').click(function () {
    // check if search box is open and close it
    if ($('.mobile-search-container').css('display') === 'block') {
      $('.mobile-search-container').fadeToggle('fast')
      $('.navigation-bar').fadeToggle('fast')
    } else {
      $('.navigation-bar').fadeToggle('fast')
    }
  })

  $('#searchButton').click(function () {
    $('.navigation-bar').css('display', 'none')
    $('.mobile-search-container').fadeToggle('fast')
  })

  $('#openDetailView').click(function () {
      $('.detail-big-container').show('slow')
  })

  $('.detail-team-close').click(function () {
    $('.detail-big-container').hide('slow')
  })


  var url = document.location.toString();
if (url.match('#')) {
    $('.nav-tabs a[href="#' + url.split('#')[1] + '"]').tab('show');
} 

// Change hash for page-reload
$('.nav-tabs a').on('shown.bs.tab', function (e) {
    window.location.hash = e.target.hash;
})
})
