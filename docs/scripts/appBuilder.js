function RegisterSimpleComponent(app, name, controller) {
    app.component(name, {
        templateUrl: templatePath(name),
        controller: controller
    });
}

function RegisterSimpleState(stateProvider, name, url) {
    stateProvider.state({
        name: name,
        url: url || "/" + name,
        component: name
    });
}

module.exports = {
    RegisterComponents: function (app, data) {
        RegisterSimpleComponent(app, "home", function (data) {
            this.steps = data.steps;
            this.stepFilter = function (step) {
                return step.show;
            }
        });
        data.steps.forEach(function (step) {
            RegisterSimpleComponent(app, step.id);
        });

        app.run(['$rootScope', '$state', '$transitions',
            function ($rootScope, $state, $transitions) {
                $transitions.onSuccess({}, () => {
                    var currentId = $state.current.name;
                    $rootScope.go = function(state){
                        $state.go(state);
                    };
                    
                    $rootScope.previousStep = null;
                    $rootScope.nextStep = null;

                    if (currentId == "home") {
                        return;
                    }
                    var currentStepIndex = -1;
                    data.steps.forEach(function (step, index) {
                        if (step.id == currentId)
                            currentStepIndex = index;
                    });
                    
                    if (currentStepIndex > 0)
                        $rootScope.previousStep = data.steps[currentStepIndex - 1];

                    if (currentStepIndex < data.steps.length - 2 && data.steps[currentStepIndex + 1].show)
                        $rootScope.nextStep = data.steps[currentStepIndex + 1];
                });
            }
        ]);

    },
    RegisterStates: function (stateProvider, data) {
        RegisterSimpleState(stateProvider, "home", "/");
        data.steps.forEach(function (step) {
            RegisterSimpleState(stateProvider, step.id);
        });
    }
}