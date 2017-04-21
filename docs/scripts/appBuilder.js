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

        RegisterSimpleComponent(app, "navigation", function ($state, $transitions) {

            var me = this;

            function setSteps() {
                var currentId = $state.current.name;

                me.previousStep = null;
                me.nextStep = null;

                if (currentId == "home") {
                    return;
                }
                var currentStepIndex = -1;
                data.steps.forEach(function (step, index) {
                    if (step.id == currentId)
                        currentStepIndex = index;
                });

                if (currentStepIndex > 0)
                    me.previousStep = data.steps[currentStepIndex - 1];

                if (currentStepIndex < data.steps.length - 2 && data.steps[currentStepIndex + 1].show)
                    me.nextStep = data.steps[currentStepIndex + 1];
            }
            
            me.go = function (state) {
                $state.go(state);
            };

            setSteps();

            $transitions.onSuccess({}, setSteps);
        });

        data.steps.forEach(function (step) {
            if (step.show)
                RegisterSimpleComponent(app, step.id);
        });
    },
    RegisterStates: function (stateProvider, data) {
        RegisterSimpleState(stateProvider, "home", "/");
        data.steps.forEach(function (step) {
            RegisterSimpleState(stateProvider, step.id);
        });
    }
}