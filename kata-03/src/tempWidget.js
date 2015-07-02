function TempWidget($parent) {
    this.$parent = $parent;
    this.request();
    //this.render();
}

TempWidget.prototype.request = function(){
    console.log("called requests()");
    this.promiseData = $.get("/api/temperature").promise();
};

TempWidget.prototype.render = function(){
    console.log("called render()");
    self = this;
    this.promiseData.done(function(data){
        console.log('data', data);

        var widget = $('<div class="temp-widget"><div class="temp-value">'+ data.temperature +' C</div><button class="update"></button></div>');
        self.$parent.html(widget);
        self.$parent.find("button.update").on("click", function(){
            self.update();
        });
    });
};

TempWidget.prototype.update = function(){
    this.request();
    this.render();
}