function TempWidget($parent){
    this.$parent = $parent;
    var widget = $('<div class="temp-widget"><div class="temp-value"></div></div>');
    widget.appendTo($parent);

}

module.exports = TempWidget;