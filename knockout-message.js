ko.bindingHandlers.message = {
  init: function(element, valueAccessor) {
    var event = valueAccessor().event;
    var message = valueAccessor().message;
    $(element).on(event, function(){
      postbox.notifySubscribers("", message);        
    })
  }
};