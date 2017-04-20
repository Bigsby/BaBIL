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
            this.stepFilter = function(step){
                return step.show;
            }
        });
        data.steps.forEach(function (step) {
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