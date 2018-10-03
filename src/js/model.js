// Start model.js

let itemController = (() => {


    let storage = {
        treeData: [{
        "name": "Niclas Superlongsurname",
        "class": "man",
        "textClass": "emphasis",
        "marriages": [{
            "spouse": {
                "name": "Iliana",
                "class": "woman",
                "extra": {
                    "nickname": "Illi"
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
        getData: function(){
            return this.treeData;
        }
    };


    return {
        storage: storage,
        // treeData: treeData
    };

})();

export default itemController;
