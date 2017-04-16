
(function(){

    angular
        .module("WonderFacts")
        .controller("listCtrl", ListController);

    ListController.$inject = ['quizMetrics', 'DataService'];

    function ListController(quizMetrics, DataService){
        var vm = this;

        vm.quizMetrics = quizMetrics;
        vm.data = DataService.wondersData;
        vm.activeWonder = {};
        vm.changeActiveWonder = changeActiveWonder;
        vm.activateQuiz = activateQuiz;
        vm.search = "";

        function changeActiveWonder(index){

            vm.activeWonder = index;
        }

        function activateQuiz(){
            quizMetrics.changeState("quiz", true);
        }
    }


})();
