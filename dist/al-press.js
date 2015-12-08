angular.module('al-press',[])

.directive('alPress',['$parse', '$timeout' ,function directive($parse, $timeout){
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {

            var pressHandler = $parse(attrs.alPress),
                pressEndHandler = $parse(attrs.onPressEnd),
                TAP_DURATION = (scope.$eval(attrs.duration) || 500),
                tapDurationReached = false,
                pressPromise,
                iAmTouch = false; // to prevent mousedown event that followes touchstart

            element.bind('mousedown', function(event) {
                if(!iAmTouch)
                    onPointerDown(event);
            });

            element.bind('mousemove touchmove', function(event) {
                $timeout.cancel(pressPromise);
            });

            element.bind('mouseup', function(event) {
                onPointerUp(event);
            });

            element.bind('touchstart', function(evt) {
                iAmTouch = true;
                onPointerDown(event);
            });

            element.bind('touchend', function(event) {
                iAmTouch = false;
                onPointerUp(event);
            });

            function onPointerDown(event) {
                tapDurationReached = false;
                pressPromise = $timeout(function() {
                    tapDurationReached = true;
                    if(attrs.alPress) {
                        onHold(event);
                    }
                }, TAP_DURATION);
            }

            function onHold(event) {
                scope.$apply(function() {
                    pressHandler(scope, {
                        $event: event
                    });
                });
            };

            function onPointerUp(event) {
                $timeout.cancel(pressPromise);
                if (attrs.onPressEnd) {
                    if (tapDurationReached) {
                        scope.$apply(function() {
                        pressEndHandler(scope, {
                            $event: event
                        });
                    });
                    }
                }
            }
        }
    };
}]);
