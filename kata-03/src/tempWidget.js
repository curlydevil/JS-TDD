function TempWidget($parent){
    this.$parent = $parent;
    var widget = $('<div class="temp-widget"></div>');
    widget.appendTo($parent);

}

module.exports = TempWidget;