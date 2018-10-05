import modelController from './model.js';


let UIController = (() => {

    let DOM = {
        container: '#graph',
		addNew: '#add-new',
		addNewModalForm: '#add-new-modal form'
    };



    function buildItemList(){
        console.log("buildItemList")
    }


	function drawTree(){
		console.log("Draw tree")

		dTree.init(modelController.storage.getData(), {
			target: DOM.container,
			debug: true,
			height: $( window ).height() - 20,
			width: $( window ).width(),
			callbacks: {
			  nodeClick: function(name, extra) {
				// console.log(name);
				// console.log("------- events ------")
				// console.log(d3.event.target)
			  },
			  textRenderer: function(name, extra, textClass) {
				  if (extra && extra.nickname)
				  name = name + " (" + extra.nickname + ")";
				  return "<p align='center' class='" + textClass + "'>" + name + "</p>";
			  }
			}

		});
		console.log("Tree is built")
    }


    return {
		buildItemList: buildItemList,
		drawTree: drawTree,
        DOM: function(){
            return DOM;
        }
    };

})();
export default UIController;