ng-warning
==========

A site I'm working on required warnings on forms in addition to errors. I extended the ng-model directive to add an ng-warning class to form inputs modeled after Angular's errors built in ng-model.

##Installation##
Add the directive's JavaScript and the CSS to your project.

##Example##
Simple form named form with one input named text1
````
<form name="form">
    <input type="text" ng-model="demoText" name="text1">
</form>
````
The below code sets a warning on the input with name="text1"

    $scope.form.text1.$setWarning("text1", true);


The below code removes a warning on the input with name="text1"

    $scope.form.text1.$setWarning("text1", false);
