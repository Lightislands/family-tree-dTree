'use strict';
// import jQuery from 'jquery';
// import jQuery from './jquery-3.3.1.min.js';

// window.jQuery = jQuery
// console.log(window.jQuery);
//
// import $ from 'jquery';
// window.jQuery = $;
// window.$ = $;

import materialize from './materialize.min.js';

import UIController from './ui.js';


let controller = (() => {
    let displayItems =()=> {
        // alert("sss")
        UIController.buildItemList();
    };

    return {
        init: function(){
            console.log('Init');
            displayItems();
        }
    };

})();

controller.init();