import itemController from './model.js';


let UIController = (() => {

    let DOM = {
        containet: '#graph',
        switchAutoManual: '#switchAuto',
        hideSettings: '.set-off'
    };



    function buildItemList(){
        console.log("buildItemList")
    }



		dTree.init(itemController.storage.getData(), {
		  target: DOM.container,
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