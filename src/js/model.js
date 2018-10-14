import UIController from "./ui";

// Start model.js

let modelController = (() => {

    let DOM = UIController.DOM();

    let storage = {
        treeData: [
        {
        "name": "Niclas Superlongsurname Niclas SuperlongsurnameNiclas Superlongsurname",
        "class": "man",
        "textClass": "emphasis",
        "marriages": [{
            "spouse": {
                "name": "Iliana",
                "class": "woman",
                "extra": {
                    "maidenName": "Illi",
                    "photoLink": "https://thumbs.img-sprzedajemy.pl/1000x901c/13/39/03/portret-na-zamowienie-olowek-ze-zdjecia-prezent-warszawa-483647228.jpg",
                    "dates": "1956"
                }
            },
            "children": [{
                "name": "James",
                "class": "man",
                "marriages": [{
                    "spouse": {
                        "name": "Alexandra",
                        "class": "woman"
                    },
                    "children": [{
                        "name": "Eric",
                        "class": "man",
                        "marriages": [{
                            "spouse": {
                                "name": "Eva",
                                "class": "woman"
                            }
                        }]
                    }, {
                        "name": "Jane",
                        "class": "woman"
                    }, {
                        "name": "Jasper",
                        "class": "man",




                        "marriages": [{
                            "spouse": {
                                "name": "Jaspers Fife",
                                "class": "woman"
                            },
                            "children": [{
                                "name": "Eric",
                                "class": "man"
                            }, {
                                "name": "Jane",
                                "class": "woman"
                            }, {
                                "name": "Jasper",
                                "class": "man"
                            }, {
                                "name": "Emma",
                                "class": "woman"
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
        addNewData.photoLink ? formatedData.extra.photoLink = addNewData.photoLink: '';

        return formatedData;
    }

    // --------------- Build connection ------------------
    let connections = {
        nodeA: {},
        nodeB: {},
        firstNodeClicked: false, // ?????
        allNodesClicked: false, // ??????

        clearNodes: function(){
            this.nodeA = {};
            this.nodeB = {};
            this.allNodesClicked = false;
        },

        getNodes: function(nodeId, pointType){
            if ("id" in this.nodeA){ // Node A already clicked, current node is B
                this.nodeB.id = nodeId;
                this.nodeB.pointType = pointType;
                this.allNodesClicked = true; // Two nodes clicked
            }else{
                this.nodeA.id = nodeId;
                this.nodeA.pointType = pointType;
            }
        },

        getTypes: function(){
            let pointA = this.nodeA.pointType;
            let pointB = this.nodeB.pointType;
            if(pointA === DOM.topPoint && pointB === DOM.bottomPoint){
                console.log("Child to parent");
            }else if(pointA === DOM.topPoint && pointB === DOM.bottomPoint){

            }else {
                console.log("Wrong sequence")
            }
        }

    };

    function buildConnection(nodeId, pointType){
         if(pointType === null){ // Clicked only first node
             connections.nodeA = nodeId;
         }else{
             console.log("Some Point clicked - "+ pointType)
             // Condition if another Node clicked

             // Do connection work in Storage

             connections.clearNodes();
         }

        // connections.getNodes(nodeId, pointType);
        //
        // if("id" in connections.nodeA){
        //     // Clicked Node is "B"
        //     // Removing unclicked points
        //     alert("AAA")
        //     $('#'+nodeId+' .top-point').addClass('hidden');
        //
        // }


        // if(connections.allNodesClicked){
        //     console.log("All nodes Clicked ++++ ")
        //     connections.getTypes();
        //     connections.clearNodes();
        // }
    }

    return {
        storage: storage,
        buildNewItem: buildNewItem,
        buildConnection: buildConnection,
        connections: connections
        // treeData: treeData
    };

})();

export default modelController;
