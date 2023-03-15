// Message [POST]
const baseUrl = 'https://chat-api-course.onrender.com';
$('#message-form').on('submit', function (e) {
    e.preventDefault();
    const messageValue = $('#messageInput').val();
    $.ajax({
      method: 'POST',
      url: baseUrl + '/messages/1', // room nb 1(general)
      data: {
        hash: localStorage.getItem('hash'),
        message: messageValue,
      },
    });
  });
// GET Message /1
$.ajax({
    method: 'GET',
    url: baseUrl + '/messages/1',
  }).done(function (response) {
    console.log(response);
    const msgArray = response.data;
    for (const msg of msgArray) {
      //clone
      const clone = $('#messageList li').eq(0).clone();
      // append
      $('#messageList').append(clone);
      // custom CSS
      if (msg.userId == localStorage.getItem('id')) {
        clone.css('text-align', 'right');
        clone.find('img').attr('src', getUser(msg.userId));
        clone.find('p').html(msg.message);
      } else {
        // custom text
        clone.find('p').html(msg.message);
      }
    }
    $('#messageList li').eq(0).remove();
  });