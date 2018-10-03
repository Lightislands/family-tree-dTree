import itemController from './model.js';


let UIController = (() => {

    let DOM = {
        chOneStart: '#ch-1-start',
        switchAutoManual: '#switchAuto',
        hideSettings: '.set-off'
    };



    function buildItemList(){
        console.log("buildItemList")
    }




	
	
		var treeData = [{
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
		}];



		dTree.init(treeData, {
		  target: "#graph",
		  debug: true,
		  height: 800,
		  width: 1200,
		  callbacks: {
			nodeClick: function(name, extra) {
			  console.log(name);
			},
			textRenderer: function(name, extra, textClass) {
				if (extra && extra.nickname)
				name = name + " (" + extra.nickname + ")";
				return "<p align='center' class='" + textClass + "'>" + name + "</p>";
			}
		  }
		});


	




    return {
        buildItemList: buildItemList,
        getDOMstrings: function(){
            return DOM;
        }
    };

})();
export default UIController;