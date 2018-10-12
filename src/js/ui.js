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
				// nodeSize: function(width, height){
				// 	console.log("------------")
				// 	console.log(width)
				// 	console.log(height)
				// },

				// nodeSize: function(nodes, width, textRenderer){
				// 	return [120,70] ;
				// },

			  nodeClick: function(name, extra) {
				// console.log(name);
				// console.log("------- events ------")
				// console.log(d3.event.target)
			  },
			  textRenderer: function(name, extra, textClass) {
				  let photo;
				  let datesBlock = '';
				  if (extra && extra.maidenName){
					  name = name + " (" + extra.maidenName + ")";
				  }
				  if (extra && extra.photoLink){
					  photo = `<img src="${extra.photoLink}" />`;
				  }	else {
					  photo = `<img src="img/result-user-avatar.png" />`;
				  }

				  if(extra && extra.dates){
					  datesBlock = `<p class="dates">${extra.dates}</p>`;
				  }

				  return `
					<div class="photo">${photo}</div>
					<div>
						<p class="${textClass}">${name}</p>
						${datesBlock}
					</div>`;
			  }
			},
			nodeWidth: 200
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