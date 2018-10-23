import UIController from "./ui";

// Start model.js

let modelController = (() => {

    let DOM = UIController.DOM();

    let storage = {
        treeData: [
        {
            "name": "NEW",
            "class": "man",
            "extra": {"nodeId": "12315"}
        },
        {
        "name": "Niclas Superlongsurname Niclas SuperlongsurnameNiclas Superlongsurname",
        "class": "man",
        "textClass": "emphasis",
        "extra": {"nodeId": "12314"},
        "marriages": [{
            "spouse": {
                "name": "Iliana",
                "class": "woman",
                "extra": {
                    "maidenName": "Illi",
                    "photoLink": "https://thumbs.img-sprzedajemy.pl/1000x901c/13/39/03/portret-na-zamowienie-olowek-ze-zdjecia-prezent-warszawa-483647228.jpg",
                    "dates": "1956",
                    "nodeId": "12312"
                }
            },
            "children": [{
                "name": "James",
                "class": "man",
                "extra": {"nodeId": "12311"},
                "marriages": [{
                    "spouse": {
                        "name": "Alexandra",
                        "class": "woman",
                        "extra": {"nodeId": "12310"}
                    },
                    "children": [{
                        "name": "Eric",
                        "class": "man",
                        "extra": {"nodeId": "1239"},
                        "marriages": [{
                            "spouse": {
                                "name": "Eva",
                                "class": "woman",
                                "extra": {"nodeId": "1238"}
                            }
                        }]
                    }, {
                        "name": "Jane",
                        "class": "woman",
                        "extra": {"nodeId": "1237"}
                    }, {
                        "name": "Jasper",
                        "class": "man",
                        "extra": {"nodeId": "1236"},



                        "marriages": [{
                            "spouse": {
                                "name": "Jaspers Fife",
                                "class": "woman",
                                "extra": {"nodeId": "1235"}
                            },
                            "children": [{
                                "name": "Eric",
                                "class": "man",
                                "extra": {"nodeId": "1234"}
                            }, {
                                "name": "Jane",
                                "class": "woman",
                                "extra": {"nodeId": "1233"}
                            }, {
                                "name": "Jasper",
                                "class": "man",
                                "extra": {"nodeId": "1232"}
                            }, {
                                "name": "Emma",
                                "class": "woman",
                                "extra": {"nodeId": "1231"}
                            }]
                        }]
                        

                    }, {
                        "name": "Emma",
                        "class": "woman"
                    }, {
                        "name": "Julia",
                        "class": "woman"
                    }, {
                        "name": "Jessica",
                        "class": "woman"
                    }]
                }]
            }]
        }]
    }]
    ,
        setData: function() {

        },
        addNew: function(addNewData) {
            this.treeData.push(addNewData);
console.log(this.treeData);
        },
        getData: function(){
            return this.treeData;
        }
    };

    // --------------- Build New Item from "Add new" input data ------------------
    function buildNewItem(context){
        let addNewData = {};
        let formatedData = {
            extra: {}
        };
        $(context).serializeArray().forEach(function (item, i, arr) {
            addNewData[item.name] = item.value;
        });
        formatedData.name = addNewData.name +" "+addNewData.lastName;
        formatedData.class = addNewData.gender;
        addNewData.maidenName ? formatedData.extra.maidenName = addNewData.maidenName : '';
        addNewData.dates ? formatedData.extra.dates = addNewData.dates : '';
        addNewData.photoLink ? formatedData.extra.photoLink = addNewData.photoLink : '';
        formatedData.extra.nodeId = new Date().valueOf();

        return formatedData;
    }

    // --------------- Node click ------------------------
    function selectNode(id){
        // Mark selected Node
        if(connections.nodeA.id) { 		// Second Node click - Show points. First Node already clicked
console.log("Second")
            $(DOM.points).removeClass('visible');
            $('#'+id+' '+DOM.linkPointsClass).addClass('visible');
        }else {												// First Node clicked - Add border
console.log("First")
            $('#' + id).addClass('selected');
            buildConnection(id, null);                      // Save Node A data
        }
    }

    function pointsHandler(target, id){
        // Points event handlers
        if(target.hasClass(DOM.topPoint)){
            buildConnection(id, DOM.topPoint);
        }
        if(target.hasClass(DOM.rightPoint)){
            buildConnection(id, DOM.rightPoint);
        }
        if(target.hasClass(DOM.bottomPoint)){
            buildConnection(id, DOM.bottomPoint);
        }
        if(target.hasClass(DOM.leftPoint)){
            buildConnection(id, DOM.leftPoint);
        }
    }

    // --------------- Build connection ------------------
    let connections = {
        nodeA: {},
        nodeB: {},
        
        // Reset nodes selection data
        clearNodes: function(){
            this.nodeA = {};
            this.nodeB = {};
            this.allNodesClicked = false;
console.log("clearNodes - Cleared")
        },
        
        resetConnectionBuilding: function(){
            $(DOM.points).removeClass('visible');
            $('foreignObject > div > div').removeClass('selected');
            connections.clearNodes();
        }

    };

    function buildConnection(nodeId, pointType){
         if(pointType === null){                // First node selected
             connections.nodeA.id = nodeId;
         }else{                                 // Some point of second node clicked
             console.log("Some Point clicked - "+ pointType +" id "+ nodeId);
             connections.nodeB.id = nodeId;
             connections.nodeB.pointType = pointType;

             // Get nodeA object
             let nodeA = connections.nodeA;
             let nodeB = connections.nodeB;

             if(nodeB.pointType == DOM.topPoint){
console.log("Top handler");
                 // 1. ----- Add item "B" as a parent to item "A" 
             }
             if(nodeB.pointType == DOM.rightPoint){
console.log("Right handler");
                 // 1. ----- Add item "A" as a "Spouse" to item "B"
             }
             if(nodeB.pointType == DOM.bottomPoint){
console.log("Bottom handler");

// Traverse deep nested objects and edit them
// https://github.com/Lightislands/obj-traverse

                 // 1. ----- Remove item "A" from data
                 function customFilter(object){
                     if(object.hasOwnProperty('nodeId') && object["nodeId"]==12315) // Replace to item "A" - nodeA.id
                         return object;

                     for(var i=0;i<Object.keys(object).length;i++){
                         if(typeof object[Object.keys(object)[i]]=="object"){
                             var o=customFilter(object[Object.keys(object)[i]]);
                             if(o!=null)
                                 return o;
                         }
                     }
                     return null;
                 }

                 var result = customFilter(storage.treeData);
console.log(result);

console.log(nodeA.id);
console.log(nodeB.id);

                 // 2. ----- Add item "A" as a child to item "B"


                 // 3. ----- Update Storage with filtered Item
                 // storage.treeData = result;
                 // console.log(storage.treeData)

                 // Rebuild tree
                 // $(DOM.container).empty();
                 // UIController.drawTree();

             }


             // Remove nodeA from data

             // Include nodeA to nodeB structure


             // Do connection work in Storage
             connections.resetConnectionBuilding();
         }
    }

    return {
        storage: storage,
        buildNewItem: buildNewItem,
        buildConnection: buildConnection,
        connections: connections,
        selectNode: selectNode,
        pointsHandler: pointsHandler
        // treeData: treeData
    };

})();

export default modelController;
