.directive('ngModel', function() {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, element, attrs, ctrl) {
      ctrl.$warning = {};
      
      ctrl.$setWarning = function(warningKey, hasWarning) {
        ctrl.$warning[warningKey] = hasWarning;
        
        if (hasWarning) {
          element.addClass("ng-warning");
        } else {
          element.removeClass("ng-warning");
        }
      }
    }
  }
});
