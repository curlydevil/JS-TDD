// display temperature (ajax call)
// display update button
// when user clicks on button widget should update temperature

describe("TempWidget", function(){
    var $parent, widget;

    beforeEach(function(){
        jasmine.Ajax.install();
        $parent = $('<div class="test-parent"></div>').appendTo('body');
        widget = new TempWidget($parent);
    });

    afterEach(function(){
        $parent.remove();
        jasmine.Ajax.uninstall();
    });

    it('tempWidget should exist', function(){
        expect(TempWidget).toBeDefined();
    });

    it("should create div element with class .temp-widget", function(){
        fakeAjax(22);
        widget.render();
        expect($("div.temp-widget").size()).toEqual(1);
    });

    var fakeAjax = function(tempValue){
        var fakeSuccess = {
            'status': 200,
            'content-type' : 'application/json',
            'responseText' : JSON.stringify({"temperature" : tempValue})
        }
        jasmine.Ajax.requests.mostRecent().respondWith(fakeSuccess);
    };

    it('should display temperature in div with class .temp-value', function(){
        fakeAjax(22);
        widget.render();
        expect($("div.temp-value").text()).toEqual("22 C");
    });

    describe("when widget is initialized", function(){
        it("should fetch temperature from server", function(){
            expect(jasmine.Ajax.requests.mostRecent().url).toEqual("/api/temperature");
        });
    });
});