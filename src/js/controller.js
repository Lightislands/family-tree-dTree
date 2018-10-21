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

import modelController from './model.js';
import UIController from './ui.js';





let controller = (() => {

    let DOM = UIController.DOM();

    /* =========================== Event Listeners =========================== */


    let setupEventListeners = () => {
        
        // $('foreignObject').on('click', function() {
        //     // Somehow console.log the ID of the circle clicked on (if any).
        //     // console.log("Clicked ID: " + d3.event.target.id);
        //
        //     console.log("------- this ------")
        //     console.log(this.id)
        //
        //     let id = this.id;
        //     $('foreignObject .link-points').removeClass('selected');
        //     $('#'+id +' .link-points').addClass('selected');
        // });

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
        // alert("sss")
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