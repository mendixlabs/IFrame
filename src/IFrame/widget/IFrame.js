define([
    "dojo/_base/declare",
    "mxui/widget/_WidgetBase",
    "dijit/_TemplatedMixin",

    "dojo/dom-style",
    "dojo/dom-attr",
    "dojo/_base/lang",

    "dojo/text!IFrame/widget/templates/IFrame.html"
], function(declare, _WidgetBase, _TemplatedMixin, domStyle, domAttr, lang, widgetTemplate) {
    "use strict";

    return declare("IFrame.widget.IFrame", [_WidgetBase, _TemplatedMixin], {

        templateString: widgetTemplate,

        name   : "", 	//the attribute to edit
        height : 0, //height, 0 = auto
        width : 0, //height, 0 = auto
        scrolling : "auto",
        prefix : "",

        iframe : null,

        _blankUrl : require.toUrl("IFrame/widget/styles/blank.html").split("?")[0],
        _contextObj : null,
        _value : null,

        postCreate : function () {
            logger.debug(this.id + ".postCreate");

            domAttr.set(this.iframe, {
                "scrolling" : this.scrolling,
                src: this._blankUrl
            });

            domStyle.set(this.iframe, {
                "backgroundColor" : "transparent",
                "height": (this.height === 0) ? "auto" : this.height + "px",
                "width" : (this.width === 0) ? "100%" : this.width + "px"
            });
        },

        resize: function (box) {
            logger.debug(this.id + ".resize");
        },

        update : function(obj, callback) {
            logger.debug(this.id + ".update");
            if (obj) {
                this._contextObj = obj;
                var val = this._contextObj.get(this.name);

                if (val === "") {
                    domStyle.set(this.domNode, "visibility", "hidden");
                } else {
                    domStyle.set(this.domNode, "visibility", "visible");
                }

                if (val !== this._value) {
                    this._value = val;
                    this.iframe.src = this.prefix + val;
                }
            } else {
                domAttr.set(this.iframe, "src", this._blankUrl);
                domStyle.set(this.domNode, "visibility", "hidden");
            }
            mendix.lang.nullExec(callback);
        }

    });
});

require(["IFrame/widget/IFrame"]);
