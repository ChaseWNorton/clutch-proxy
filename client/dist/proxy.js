// console.log('hello james');


const $secondaryContainer = $('#secondary-container')
// console.log('$secondaryContainer:', $secondaryContainer);

const $campaignBtn = $('#camp-btn');
$campaignBtn.on('click', (event) => {
  $('.campaign-about-container').removeClass('hide-div');
  $('.pledge-support-container').removeClass('hide-div');
  $('#comments').addClass('hide-div');
  $('#updates').addClass('hide-div');

  $campaignBtn.addClass('selected');
  $updatesBtn.removeClass('selected');
  $commentsBtn.removeClass('selected');
});

const $updatesBtn = $('#updates-btn')
$updatesBtn.on('click', (event) => {
  $('#updates').removeClass('hide-div');
  $('#comments').addClass('hide-div');
  $('.campaign-about-container').addClass('hide-div');
  $('.pledge-support-container').addClass('hide-div');

  $updatesBtn.addClass('selected');
  $campaignBtn.removeClass('selected');
  $commentsBtn.removeClass('selected');
});

$('#updates').addClass('hide-div');

const $commentsBtn = $('#comments-btn')
$commentsBtn.on('click', (event) => {
  $('#comments').removeClass('hide-div');
  $('#updates').addClass('hide-div');
  $('.campaign-about-container').addClass('hide-div');
  $('.pledge-support-container').addClass('hide-div');

  $commentsBtn.addClass('selected');
  $campaignBtn.removeClass('selected');
  $updatesBtn.removeClass('selected');
});

$('#comments').addClass('hide-div');