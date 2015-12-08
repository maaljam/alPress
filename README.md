# alPress
Angular Directive for long press for mobile and desktop

## Features
1. Works for both mobile (touch) and desktop (mouse) events
2. Custom duration can be set
3. on-press-end event can be attached

## Install

+ Include the required source file (this path or similar)

>
``` html
<script src="dist/al-press.js"></script>
```

+ Inject the `al-press` module into your app.

>
``` JavaScript
angular.module('app', ['al-press']);
```

## Usage
+ The basic use is as follows: (event will fire by default after 500ms long press)
>
``` html
<div al-press="onPress">Click Me</div>
```

+ You can specify a custom duration like below
>
``` html
<div al-press="onPress" duration="1000">Click Me</div>
```

+ You can attach another event that fires on press end
>
``` html
<div al-press on-press-end="onPressEnd" >Click Me</div>
```

+ In Controller

>
``` JavaScript
scope.onPress = function(){
  alert('heeey');
};
```
``` JavaScript
scope.onPressEnd = function(){
  alert('heeey');
};
```

##Other Directives
check out these other useful directives I made:

1. [alClick](https://github.com/maaljam/alClick): Improved version of ngClick
