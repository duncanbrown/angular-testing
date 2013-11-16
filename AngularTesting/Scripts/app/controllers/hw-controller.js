function HelloWorldController($scope) {
    $scope.name = 'World';

    Object.defineProperty($scope, 'nameChars', {
        get: function () { return $scope.name.length; }
    });

    //$scope.nameChars = function () {
    //    return $scope.name.length;
    //};
}