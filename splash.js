// Module for the demo
angular.module('splashDemo', ['ui.splash'])
.controller('MainCtrl', ['$splash', function ($splash) {
  this.openSplash = function () {
    $splash.open({
      title: 'Hey there, Welcome to Nobstruction',
      message: "What do you want to report?"
    });
  };
}]);

// Re-usable $splash module
angular.module('ui.splash', ['ui.bootstrap'])
.service('$splash', [
  '$modal',
  '$rootScope',
  function($modal, $rootScope) {
    return {
      open: function (attrs, opts) {
        var scope = $rootScope.$new();
        angular.extend(scope, attrs);
        opts = angular.extend(opts || {}, {
          backdrop: false,
          scope: scope,
          templateUrl: 'splash/content.html',
          windowTemplateUrl: 'splash/index.html'
        });
        return $modal.open(opts);
      }
    };
  }
])
.run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('splash/index.html',
      '<section class="splash" ng-class="{\'splash-open\': animate}" ng-style="{\'z-index\': 1000, display: \'block\'}" ng-click="close($event)">' +
      '  <div class="splash-inner" ng-transclude></div>' +
      '</section>'
    );
    $templateCache.put('splash/content.html',
      '<div class="splash-content text-center">' +
      '  <h1 ng-bind="title"></h1>' +
      '  <p class="lead" ng-bind="message"></p>' +
      '  <a href="khadda.html" class="btn btn-lg btn-outline" ng-bind="btnText || \'A Khadda\'" Okayy</a>' + 
                       '  <a href="http://www.google.com" class="btn btn-lg btn-outline" ng-bind="btnText || \'Illegal Speedbreaker\'" Okayy</a>' +
                       '  <a href="http://www.google.com" class="btn btn-lg btn-outline" ng-bind="btnText || \'Illegal Road block\'" Okayy</a>' +
                       '  <a href="http://www.google.com" class="btn btn-lg btn-outline" ng-bind="btnText || \'Manholes\'" Okayy</a>' +
      '</div>'
    );
  }
]);