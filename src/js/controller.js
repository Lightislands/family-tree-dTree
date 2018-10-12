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

let DOM = UIController.DOM();

/* =========================== Event Listeners =========================== */


let setupEventListeners = () => {
    $('foreignObject').on('click', function() {
        // Somehow console.log the ID of the circle clicked on (if any).
        // console.log("Clicked ID: " + d3.event.target.id);

        console.log("------- this ------")
        console.log(this.id)

        let id = this.id;
        $('foreignObject').removeClass('selected');
        $("#"+id).addClass('selected');
    });

    // Init Modals
    $(document).ready(function(){
        $('.modal').modal();
    });
    //
    // $(DOM.addNewSubmit).click(function(){
    //     modelController.storage.addNew(); // send formData
    //     $(DOM.container).empty();
    //     UIController.drawTree();
    // });

    // $(DOM.addNewSubmit).click(function(event){
    //     console.log("-------");
    //     event.preventDefault();
    //     console.log( $("#add-new-modal").serialize() );
    // });

    $(DOM.addNewModalForm).on( "submit", function( event ) {
        event.preventDefault();
        let addNewData = {};
        let formatedData = {
            extra: {}
        };
        $(this).serializeArray().forEach(function (item, i, arr) {
            addNewData[item.name] = item.value;
        });

        formatedData.name = addNewData.name +" "+addNewData.lastName;
        formatedData.class = addNewData.gender;
        addNewData.maidenName ? formatedData.extra.maidenName = addNewData.maidenName : '';
        addNewData.dates ? formatedData.extra.dates = addNewData.dates : '';
        addNewData.photoLink ? formatedData.extra.photoLink = addNewData.photoLink: '';
        
        modelController.storage.addNew(formatedData); // send formData
        $(DOM.container).empty();
        UIController.drawTree();
    });
};



let controller = (() => {
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