(function (){
    'use strict';
    angular.module('lunchChecker',[])
    .controller('input', function ($scope){
        $scope.name ="";
        $scope.totalvalue=0;


        $scope.displayNumaric=function(){
           // var totalnamevalue=calculatenumericforstring($scope.name);
           // $scope.totalvalue=totalnamevalue;
           var string=$scope.name;
           var totalvalu=0;
           for(var i=0;i<string.length;i++){
              totalvalu +=string.charCodeAt(i);
              $scope.totalvalue = totalvalu;
           }
        };
        $scope.infoMessage = function(){
            var sprits=$scope.name;
            $scope.list=sprits.split(',');
            console.log("hii");
            console.log($scope.list.length);
            if($scope.name==""){
                $scope.message='plz enter data first';
               
            }
            else{
                if ($scope.list.length<=2) {
                    $scope.message='Enjoy your lunch';
                    
    
                    
                } else {
                    $scope.message='Its Too much!';
                    
                }
            }

            
            
            
            return(message);

        };

       /* function calculatenumericforstring(string) {
            var totalstringvalue = 0;
            for (var i=0;i< string.length;i++){
                totalstringvalue +=string.charCodeAt(i);
            }
            return (totalstringvalue);
        }*/
        
    });
    

})();