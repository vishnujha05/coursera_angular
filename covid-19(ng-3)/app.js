const URL = "https://covid19.mathdro.id/api";
let CURL = 'https://covid19.mathdro.id/api/countries/india';

let app = angular.module('MyApp', []);
app.controller('MyCntr', ($scope, $http) => {
    $scope.name = 'vishnu jha';
    $scope.CountryName = "";
    $http.get(URL).then(
        (response) => {
            console.log(response.data);
            $scope.Data = response.data;
        },
        (error) => {
            console.log(error);

        }
    );
    $scope.CountryChange = (CountryName) => {
        //console.log($scope.CountryName);
        var Country = $scope.CountryName;
        console.log(Country);
        if(Country==''){
            return;
        }
        $http.get(`${URL}/countries/${Country}`).then(
            (response) => {
                console.log(response.data);
                $scope.CountryData = response.data;
            },
            (error) => {
                console.log(error);
    
            }
        );

    }
});