/**
	IFrame
	========================

	@file      : IFrame.js
	@version   : 2.1 (alpha)
	@author    : Richard Edens
	@date      : 8/11/2014
	@copyright : Mendix
	@license   : Please contact our sales department.

	Documentation
	=============
	This widget can be used to embed external websites in the client. 
	
	Open Issues
	===========

	File is best readable with tabwidth = 2;
*/
dojo.provide("IFrame.widget.IFrame");

dojo.declare("IFrame.widget.IFrame", [ mxui.widget._WidgetBase, dijit._TemplatedMixin ],
{
    name   : '', 	//the attribute to edit
    height : 0, //height, 0 = auto
    width : 0, //height, 0 = auto
    domNode : null,
    iframe : null,
    _contextObj : null,
    _value : '',
    scrolling : 'auto',
    prefix : '',
    templateString : dojo.cache('IFrame.widget', 'templates/IFrame.html'),

    update : function(obj, callback) {
        'use strict';

        if(typeof obj === 'string'){
            this._contextGuid = obj;
            mx.data.get({
                guids    : [this._contextGuid],
                callback : dojo.hitch(this, function(objs) {
                    this._contextObj = objs;
                })
            });
        } else {
            this._contextObj = obj;
        }

        if(this._contextObj !== null){
            if (this._contextObj.get(this.name) === '') {
                dojo.style(this.iframe, 'height', '0px');
            } else {
                dojo.style(this.iframe, 'width', (this.width === 0) ? '100%' : this.width + 'px');
            }
            if (this._contextObj.get(this.name) !== this._value) {
                this._value = this._contextObj.get(this.name);
                this.iframe.src = this.prefix + this._contextObj.get(this.name);
            }
        }

        if(typeof callback !== 'undefined'){
            callback();
        }
    },

    postCreate : function(){
        'use strict';

        logger.debug(this.id + ".postCreate");
        dojo.attr(this.iframe, {
            'scrolling' : this.scrolling
        });
        dojo.style(this.iframe, {
            'backgroundColor' : 'transparent',
            'height': (this.height === 0) ? 'auto' : this.height + 'px',
            'width' : (this.width === 0) ? '100%' : this.width + 'px'
        });
        //NOT for attribute widgets: this.actRendered();
    },

    uninitialize : function(){
        'use strict';
        logger.debug(this.id + ".uninitialize");
    }
});