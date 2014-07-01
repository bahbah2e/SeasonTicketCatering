var ModalDemoCtrl = function ($scope, $modal, $log) {

    $scope.open = function (size, url) {

        var modalInstance = $modal.open({
            templateUrl: url,
            controller: ModalInstanceCtrl,
            size: size,
        });

        modalInstance.result.then(function (selection) {
            var result = selection;
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };
};

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

var ModalInstanceCtrl = function ($scope, $modalInstance) {

    $scope.ok = function () {
        $modalInstance.close('ok');
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
};