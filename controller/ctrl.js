app.controller("ratingctrl",function($scope,ratingfactory){
    
    var count=0;
    $scope.like=0;
    
    $scope.show=function(){
        count=count+1;
        ratingfactory.push($scope.name,$scope.desc,$scope.mngr,$scope.rating,count);
        $scope.employee=ratingfactory.objList;
        //alert(count);
    }
    
    $scope.update=function(index){
        $scope.name=index.name;
        $scope.desc=index.desc;
        $scope.mngr=index.mngr;
        $scope.rating=index.rating;
        $scope.id=index.count;
    }
    
    $scope.remove=function(index){
        //alert(index);
        ratingfactory.get(index);
        ratingfactory.push($scope.name,$scope.desc,$scope.mngr,$scope.rating,index);
    }
    
    $scope.delete=function(index){
        ratingfactory.get(index);
        $scope.name=null;
        $scope.desc=null;
        $scope.mngr=null;
        $scope.rating=0;
    }
    
    $scope.click=function(index){
        index=index+1;
    }
    
    
    
    
    /* -- x -- x -- x -- */
    $scope.rating = 5;
    $scope.rateFunction = function(rating) {
      //alert('Rating selected - ' + rating);
    };
    
}).directive('starRating',
	function() {
		return {
			restrict : 'A',
			template : '<ul class="rating">'
					 + '	<li ng-repeat="star in stars" ng-class="star" ng-click="toggle($index)">'
					 + '\u2605'
					 + '</li>'
					 + '</ul>',
			scope : {
				ratingValue : '=',
				max : '=',
				onRatingSelected : '&'
			},
			link : function(scope, elem, attrs) {
				var updateStars = function() {
					scope.stars = [];
					for ( var i = 0; i < scope.max; i++) {
						scope.stars.push({
							filled : i < scope.ratingValue
						});
					}
				};
				
				scope.toggle = function(index) {
					scope.ratingValue = index + 1;
					scope.onRatingSelected({
						rating : index + 1
					});
				};
				
				scope.$watch('ratingValue',
					function(oldVal, newVal) {
						if (newVal) {
							updateStars();
						}
					}
				);
			}
		};
	}
);