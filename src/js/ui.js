import modelController from './model.js';


let UIController = (() => {

    let DOM = {
        containet: '#graph',
        switchAutoManual: '#switchAuto',
        hideSettings: '.set-off'
    };



    function buildItemList(){
        console.log("buildItemList")
    }


	function drawTree(){
		console.log("Draw tree")
		dTree.init(modelController.storage.getData(), {
			target: DOM.container,
			debug: true,
			height: 800,
			width: 1200,
			callbacks: {
			  nodeClick: function(name, extra) {
				console.log(name);
				console.log("------- events ------")
				console.log(d3.event)
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




		$('foreignObject').on('click', function() {
			// Somehow console.log the ID of the circle clicked on (if any).
			//console.log("Clicked ID: " + d3.event.target.id);
			console.log("------- this ------")
			console.log(this.id)
			let id = this.id;
			$('foreignObject').removeClass('selected');
			$("#"+id).addClass('selected');
		});

		$('#add-new').click(function(){
			modelController.storage.addNew()
		})


    return {
		buildItemList: buildItemList,
		drawTree: drawTree,
        getDOMstrings: function(){
            return DOM;
        }
    };

})();
export default UIController;