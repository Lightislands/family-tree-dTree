import modelController from './model.js';


let UIController = (() => {

    let DOM = {
        container: '#graph',
		addNew: '#add-new',
		addNewModalForm: '#add-new-modal form',
		points: 'foreignObject .link-points',
		linkPointsClass: '.link-points',
		linkPoints: 'link-points',
		topPoint: 'top-point', // without "."
		rightPoint: 'right-point',
		bottomPoint: 'bottom-point',
		leftPoint: 'left-point'
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

				  let target = $(d3.event.target);
				  let id = target.closest('foreignObject').attr('id'); //this.id;

				  if($(target[0]).hasClass(DOM.linkPoints)){
					  pointsHandler();								// Click on point
				  }else{
					  markSelectedNode(); 							// Click on Node
				  }

				  function markSelectedNode(){
					  // Mark selected Node
					  if(modelController.connections.nodeA.length) { 		// Second node click - Show points
console.log("Second")
						  $('#'+id+' '+DOM.linkPointsClass).addClass('visible');
					  }else {												// First Node clicked - Add border
console.log("First")
						  $('#' + id).addClass('selected');
						  modelController.connections.firstNodeClicked = true; // ?????? do I need it ?????
						  modelController.buildConnection(id, null);
					  }
				  }

				  function pointsHandler(){
					  // Points event handlers
					  if($(target[0]).hasClass(DOM.topPoint)){
console.log("------Top Point of " + id);
						  modelController.buildConnection(id, DOM.topPoint);
					  }
					  if($(target[0]).hasClass(DOM.rightPoint)){
						  console.log("------Right Point of " + id);
						  modelController.buildConnection(id, DOM.rightPoint);
					  }
					  if($(target[0]).hasClass(DOM.bottomPoint)){
						  console.log("------Bottom Point of " + id);
						  modelController.buildConnection(id, DOM.bottomPoint);
					  }
					  if($(target[0]).hasClass(DOM.leftPoint)){
						  console.log("------Left Point of " + id);
						  modelController.buildConnection(id, DOM.leftPoint);
					  }
				  }
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
					</div>
					<div class="link-points ${DOM.topPoint}"></div>
					<div class="link-points ${DOM.rightPoint}"></div>
					<div class="link-points ${DOM.bottomPoint}"></div>
					<div class="link-points ${DOM.leftPoint}"></div>
					`;
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