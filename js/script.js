$(function() {
  var $profileURL   = $('.profileURL'),
      $name         = $('.name'),
      $profession   = $('.profession'),
      $quote        = $('.quote');
  var $url          = 'https://radiant-lake-39661.herokuapp.com/dylan';

  $.ajax({
    url: $url,
    dataType: 'jsonp'
  })
  .done(function(data) {
    $profileURL.attr('src', data.profileURL);
    $name.text(data.name);
    $profession.text(data.profession);
    $quote.text(data.quote);
  })
  .fail(function(req, textStatus, errorThrown) {
    console.log(errorThrown);
  });
});
