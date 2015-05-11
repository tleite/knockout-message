##Online Demo
<a href="http://jsfiddle.net/bzr5npdj/">
http://jsfiddle.net/bzr5npdj/</a>

####Why do you need this?

When you need to have multiple view models communicate with each other, you usually have to do something like this ```data-bind="click: $parent[2].action"```


This method is messy and unreliable, because if the order of the view models change, then your view will break.

Instead, you can send a message from the HTML and have the ViewModel subscribe to it:

####HTML File
```
data-bind="message: {topic: 'topicName', event: 'click'}"
```

####JS File
```
postbox.subscribe(function() {
  alert("hello");
}, self, "topicName");
```

#### How to install it
Look at demo.html