'use strict';

import materialize from './materialize.min.js';

import modelController from './model.js';
import UIController from './ui.js';

let controller = (() => {

    let DOM = UIController.DOM();

    /* =========================== Event Listeners =========================== */


    let setupEventListeners = () => {
        
        // --------------- Remove link-points ------------------
        $(window).click(function(e){
            if(e.target.tagName.toUpperCase() == 'SVG'){
                modelController.connections.resetConnectionBuilding();
            }
        });

        // --------------- Init Modals
        $(document).ready(function(){
            $('.modal').modal();
        });

        // --------------- Add New ------------------

        $(DOM.addNewModalForm).on( "submit", function( event ) {
            event.preventDefault();
            let formatedData = modelController.buildNewItem(this);
            modelController.storage.addNew(formatedData); // send formData
            $(DOM.container).empty();
            UIController.drawTree();
        });
    };


    let displayItems =()=> {
        UIController.drawTree();
    };

    return {
        init: function(){
            console.log('Init');
            displayItems();
            setupEventListeners();
        }
    };

})();

controller.init();