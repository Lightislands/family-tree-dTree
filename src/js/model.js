import UIController from "./ui";

// Start model.js

let modelController = (() => {


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


    return {
        storage: storage
        // treeData: treeData
    };

})();

export default modelController;
