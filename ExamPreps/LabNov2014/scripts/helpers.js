Handlebars.registerHelper('ifCond', function(v1) {
    if(v1 > 100) {
        return 100;
    }
    return this;
});