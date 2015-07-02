// display temperature (ajax call)
// display update button
// when user clicks on button widget should update temperature

describe("TempWidget", function(){
    var $parent, widget;

    beforeEach(function(){
        $parent = $('<div class="test-parent"></div>').appendTo('body');
        widget = new TempWidget($parent);
    });

    afterEach(function(){
        $parent.remove();
    });

    it('tempWidget should exist', function(){
        expect(TempWidget).toBeDefined();
    });

    it("should create div element with class .temp-widget", function(){
        expect($("div.temp-widget").size()).toEqual(1);
    });
});