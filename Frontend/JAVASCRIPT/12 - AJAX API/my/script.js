(function() {
    var Message;
  
    Message = function({
        text: text1,
        message_side: message_side1
      }) {
      this.text = text1;
      this.message_side = message_side1;
      this.draw = () => {
        var $message;
        $message = $($('.message_template').clone().html());
        $message.addClass(this.message_side).find('.text').html(this.text);
        $('.messages').append($message);
        return setTimeout(function() {
          return $message.addClass('appeared');
        }, 0);
      };
      return this;
    };
  
    $(function() {
      var getMessageText, message_side, sendMessage;
      message_side = 'right';
      getMessageText = function() {
        var $message_input;
        $message_input = $('.message_input');
        return $message_input.val();
      };
      sendMessage = function(text) {
        var $messages, message;
        if (text.trim() === '') {
          return;
        }
        $('.message_input').val('');
        $messages = $('.messages');
        message_side = message_side === 'left' ? 'right' : 'left';
        message = new Message({text, message_side});
        message.draw();
        return $messages.animate({
          scrollTop: $messages.prop('scrollHeight')
        }, 300);
      };
      $('.send_message').click(function(e) {
        return sendMessage(getMessageText());
      });
      $('.message_input').keyup(function(e) {
        if (e.which === 13) { // enter key
          return sendMessage(getMessageText());
        }
      });
      sendMessage('Hello Philip! :)');
      setTimeout(function() {
        return sendMessage('Hi Sandy! How are you?');
      }, 1000);
      return setTimeout(function() {
        return sendMessage('I\'m fine, thank you!');
      }, 2000);
    });
  
  }).call(this);
  
  //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBOztFQUFBLE9BQUEsR0FBVSxRQUFBLENBQUM7TUFBRyxXQUFIO01BQVU7SUFBVixDQUFELENBQUE7SUFBRyxJQUFDLENBQUE7SUFBTSxJQUFDLENBQUE7SUFDbkIsSUFBQyxDQUFBLElBQUQsR0FBUSxDQUFBLENBQUEsR0FBQTtBQUNWLFVBQUE7TUFBSSxRQUFBLEdBQVcsQ0FBQSxDQUFFLENBQUEsQ0FBRSxtQkFBRixDQUFzQixDQUFDLEtBQXZCLENBQUEsQ0FBOEIsQ0FBQyxJQUEvQixDQUFBLENBQUY7TUFDWCxRQUFRLENBQUMsUUFBVCxDQUFrQixJQUFDLENBQUEsWUFBbkIsQ0FBZ0MsQ0FBQyxJQUFqQyxDQUFzQyxPQUF0QyxDQUE4QyxDQUFDLElBQS9DLENBQW9ELElBQUMsQ0FBQSxJQUFyRDtNQUNBLENBQUEsQ0FBRSxXQUFGLENBQWMsQ0FBQyxNQUFmLENBQXNCLFFBQXRCO2FBQ0EsVUFBQSxDQUFXLFFBQUEsQ0FBQSxDQUFBO2VBQ1QsUUFBUSxDQUFDLFFBQVQsQ0FBa0IsVUFBbEI7TUFEUyxDQUFYLEVBRUUsQ0FGRjtJQUpNO1dBT1I7RUFSUTs7RUFVVixDQUFBLENBQUUsUUFBQSxDQUFBLENBQUE7QUFDRixRQUFBLGNBQUEsRUFBQSxZQUFBLEVBQUE7SUFBRSxZQUFBLEdBQWU7SUFFZixjQUFBLEdBQWlCLFFBQUEsQ0FBQSxDQUFBO0FBQ25CLFVBQUE7TUFBSSxjQUFBLEdBQWlCLENBQUEsQ0FBRSxnQkFBRjthQUNqQixjQUFjLENBQUMsR0FBZixDQUFBO0lBRmU7SUFJakIsV0FBQSxHQUFjLFFBQUEsQ0FBQyxJQUFELENBQUE7QUFDaEIsVUFBQSxTQUFBLEVBQUE7TUFBSSxJQUFVLElBQUksQ0FBQyxJQUFMLENBQUEsQ0FBQSxLQUFlLEVBQXpCO0FBQUEsZUFBQTs7TUFFQSxDQUFBLENBQUUsZ0JBQUYsQ0FBbUIsQ0FBQyxHQUFwQixDQUF3QixFQUF4QjtNQUNBLFNBQUEsR0FBWSxDQUFBLENBQUUsV0FBRjtNQUNaLFlBQUEsR0FBa0IsWUFBQSxLQUFnQixNQUFuQixHQUErQixPQUEvQixHQUE0QztNQUUzRCxPQUFBLEdBQVUsSUFBSSxPQUFKLENBQVksQ0FBRSxJQUFGLEVBQVMsWUFBVCxDQUFaO01BQ1YsT0FBTyxDQUFDLElBQVIsQ0FBQTthQUNBLFNBQVMsQ0FBQyxPQUFWLENBQW1CO1FBQUUsU0FBQSxFQUFXLFNBQVMsQ0FBQyxJQUFWLENBQWUsY0FBZjtNQUFiLENBQW5CLEVBQWtFLEdBQWxFO0lBVFk7SUFXZCxDQUFBLENBQUUsZUFBRixDQUFrQixDQUFDLEtBQW5CLENBQXlCLFFBQUEsQ0FBQyxDQUFELENBQUE7YUFDdkIsV0FBQSxDQUFZLGNBQUEsQ0FBQSxDQUFaO0lBRHVCLENBQXpCO0lBR0EsQ0FBQSxDQUFFLGdCQUFGLENBQW1CLENBQUMsS0FBcEIsQ0FBMEIsUUFBQSxDQUFDLENBQUQsQ0FBQTtNQUN4QixJQUFpQyxDQUFDLENBQUMsS0FBRixLQUFXLEVBQTVDO2VBQUEsV0FBQSxDQUFZLGNBQUEsQ0FBQSxDQUFaLEVBQUE7O0lBRHdCLENBQTFCO0lBR0EsV0FBQSxDQUFZLGtCQUFaO0lBQ0EsVUFBQSxDQUFXLFFBQUEsQ0FBQSxDQUFBO2FBQ1QsV0FBQSxDQUFZLHdCQUFaO0lBRFMsQ0FBWCxFQUVFLElBRkY7V0FJQSxVQUFBLENBQVcsUUFBQSxDQUFBLENBQUE7YUFDVCxXQUFBLENBQVksdUJBQVo7SUFEUyxDQUFYLEVBRUUsSUFGRjtFQTdCQSxDQUFGO0FBVkEiLCJzb3VyY2VzQ29udGVudCI6WyJNZXNzYWdlID0gKHsgQHRleHQsIEBtZXNzYWdlX3NpZGUgfSkgLT5cbiAgQGRyYXcgPSA9PlxuICAgICRtZXNzYWdlID0gJCgkKCcubWVzc2FnZV90ZW1wbGF0ZScpLmNsb25lKCkuaHRtbCgpKVxuICAgICRtZXNzYWdlLmFkZENsYXNzKEBtZXNzYWdlX3NpZGUpLmZpbmQoJy50ZXh0JykuaHRtbChAdGV4dClcbiAgICAkKCcubWVzc2FnZXMnKS5hcHBlbmQoJG1lc3NhZ2UpXG4gICAgc2V0VGltZW91dCAtPlxuICAgICAgJG1lc3NhZ2UuYWRkQ2xhc3MoJ2FwcGVhcmVkJylcbiAgICAsIDBcbiAgQFxuICBcbiQgLT5cbiAgbWVzc2FnZV9zaWRlID0gJ3JpZ2h0J1xuICBcbiAgZ2V0TWVzc2FnZVRleHQgPSAtPlxuICAgICRtZXNzYWdlX2lucHV0ID0gJCgnLm1lc3NhZ2VfaW5wdXQnKVxuICAgICRtZXNzYWdlX2lucHV0LnZhbCgpXG4gIFxuICBzZW5kTWVzc2FnZSA9ICh0ZXh0KSAtPlxuICAgIHJldHVybiBpZiB0ZXh0LnRyaW0oKSBpcyAnJ1xuXG4gICAgJCgnLm1lc3NhZ2VfaW5wdXQnKS52YWwoJycpXG4gICAgJG1lc3NhZ2VzID0gJCgnLm1lc3NhZ2VzJylcbiAgICBtZXNzYWdlX3NpZGUgPSBpZiBtZXNzYWdlX3NpZGUgaXMgJ2xlZnQnIHRoZW4gJ3JpZ2h0JyBlbHNlICdsZWZ0J1xuXG4gICAgbWVzc2FnZSA9IG5ldyBNZXNzYWdlKHsgdGV4dCwgIG1lc3NhZ2Vfc2lkZSB9KVxuICAgIG1lc3NhZ2UuZHJhdygpXG4gICAgJG1lc3NhZ2VzLmFuaW1hdGUgIHsgc2Nyb2xsVG9wOiAkbWVzc2FnZXMucHJvcCgnc2Nyb2xsSGVpZ2h0JykgfSwgMzAwXG4gIFxuICAkKCcuc2VuZF9tZXNzYWdlJykuY2xpY2sgKGUpIC0+XG4gICAgc2VuZE1lc3NhZ2UgZ2V0TWVzc2FnZVRleHQoKVxuICAgIFxuICAkKCcubWVzc2FnZV9pbnB1dCcpLmtleXVwIChlKSAtPlxuICAgIHNlbmRNZXNzYWdlKGdldE1lc3NhZ2VUZXh0KCkpIGlmIGUud2hpY2ggaXMgMTMgIyBlbnRlciBrZXlcbiAgICBcbiAgc2VuZE1lc3NhZ2UoJ0hlbGxvIFBoaWxpcCEgOiknKVxuICBzZXRUaW1lb3V0IC0+XG4gICAgc2VuZE1lc3NhZ2UoJ0hpIFNhbmR5ISBIb3cgYXJlIHlvdT8nKVxuICAsIDEwMDBcbiAgXG4gIHNldFRpbWVvdXQgLT5cbiAgICBzZW5kTWVzc2FnZSgnSVxcJ20gZmluZSwgdGhhbmsgeW91IScpXG4gICwgMjAwMCJdfQ==
  //# sourceURL=coffeescript