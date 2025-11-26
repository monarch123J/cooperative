// 1. Définition du module principal
angular.module('myApp', []);

// 2. Définition de la directive la plus simple
angular.module('myApp')
    .directive('appNavbar', function() {
        return {
            restrict: 'E', // 'E' pour Element (utilisation comme <app-navbar>)
            templateUrl: 'components/navbar/navbar.html' // Le chemin vers votre template
            // Pas besoin de controller, scope, ou bindings pour une simple inclusion
        };


    });

    

 