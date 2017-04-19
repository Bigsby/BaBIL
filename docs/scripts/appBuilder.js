module.exports = {
    ProcessData: function(data) {

    },
    RegisterComponents: function(app) {
        app.component("home", {
            templateUrl: templatePath("home")
        });

        app.component("overview", {
            templateUrl: templatePath("overview")
        });
    },
    RegisterStates: function(stateProvider) {
        stateProvider.state({
            name: "home",
            url: "/",
            component: "home"
        });

        stateProvider.state({
            name: "overview",
            url: "/overview",
            component: "overview"
        });
    }
}