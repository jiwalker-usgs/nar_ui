$(document).ready(function(){
    var numberOfPlots = 0;
    var get_or_fail = function(selector){
        var jqElt = $(selector);
        if(!jqElt.length){
            throw Error('Could not find selector "' + selector + '"');
        }
        return jqElt;
    };
    
    var graphToggleSelector = '#plotToggleTree';
    var graphToggleElt = get_or_fail(graphToggleSelector);
    
    var allPlotsWrapperSelector = '#plotsWrapper';
    var allPlotsWrapper = get_or_fail(allPlotsWrapperSelector);
    
    var instructionsSelector = '#instructions';
    var instructionsElt = get_or_fail(instructionsSelector);
    
    var nonLeafNode = function(node){
        return Object.merge(node, {
            icon: 'glyphicon glyphicon-folder-open'
        });
    }
    var leafNode = function(text){
        return {
            text: text,
            icon: 'glyphicon glyphicon-asterisk'
        };
    };
    
    var waterQualityConstituentChildren = [
         nonLeafNode({
             text:'Concentrations',
             children: [
                'Mean Annual',
                'Flow-weighted',
                'Sample'
            ].map(leafNode)
         }),
         leafNode('Loads')
    ];
    var waterQualityConstituentNode = function(name){
        return nonLeafNode({
            'text' : name,
            'children' : Object.clone(waterQualityConstituentChildren, true)
       });
    };
    var constituentNames = [
       'Total Nitrogen',
       'Nitrate',
       'Total Phosphorous',
       'Suspended Sediment',
       'Pesticides',
       'Ecology'
    ];
    var waterQualityConstituentNodes = constituentNames.map(waterQualityConstituentNode);
    graphToggleElt.jstree({
        'plugins': ['checkbox'],
        'core' : {
            'data' : [
               {
                 'text' : 'Water Quality',
                 'state': {
                     'opened' : true
                 },
                 'children' : waterQualityConstituentNodes
              },
              {
                  'text' : 'Streamflow',
                  'state': {
                     'opened' : true
                  },
                  'children' : [
                        'Real-time',
                        'Annual',
                        'Hydrograph',
                        'Flow duration'
                   ].map(leafNode)
              }
            ].map(nonLeafNode)
        }
    });
    var plotContainerClass = 'data'; 
    var plotIdSuffix = '_' + plotContainerClass;
    var makePlotContainerIdFromJsTreeId = function(jstreeId){
        return jstreeId + plotIdSuffix;
    };
    
    var addPlotContainer = function(jstreeId, text){
        //if no plots are currently visualized, but one has been
        //requested to be added.        
        if(0 === numberOfPlots){
            instructionsElt.addClass('hide');            
        }
        
        var id = makePlotContainerIdFromJsTreeId(jstreeId);
        var plotContainerMissing = $('#' + id).length === 0;
        
        if(plotContainerMissing){
            var plotContainer = $('<div/>', {
                id: id,
                class: plotContainerClass
            });
            var plotContent = $('<h2/>', {
                text:text
            });
            plotContainer.append(plotContent);    
            
            allPlotsWrapper.prepend(plotContainer);
            numberOfPlots++;
        }
    };
    var removePlotContainer = function(jstreeId){
        var selector = '#' + makePlotContainerIdFromJsTreeId(jstreeId);
        
        var plotContainer = get_or_fail(selector);
        plotContainer.remove();
        
        numberOfPlots--;
        
        var noPlotsRemain = !numberOfPlots; 
        if(noPlotsRemain){
            instructionsElt.removeClass('hide');                
        }
    };
    
    var plotTree = $(graphToggleElt).jstree();
    var getNode = function(selectedItem){
        return plotTree.get_node(selectedItem);
    };
    var getParents = function(node){
        var parentNodes = [];
        if(node.parents.length){
            node.parents.each(function(parentId){
                //the absolute root of the tree is '#'. Ignore this case. 
                if('#' !== parentId){
                    parentNode = getNode(parentId);
                    parentNodes.push(parentNode);
                }
            });
        }
        return parentNodes;
    };
    
    
    var getAllLeafChildren = function(node){
        var leafChildren = [];
        var recursivelyGetAllLeafChildren = function(nodeRef){
            //recursive case
            var node = getNode(nodeRef);
            if(node.children.length){
                node.children.each(recursivelyGetAllLeafChildren);
            }
            //base case
            else {
                leafChildren.add(node);
            }
        };
        recursivelyGetAllLeafChildren(node, leafChildren);
        return leafChildren;
    };
    
    graphToggleElt.on("select_node.jstree", function (e, data) {
        var leafChildren = getAllLeafChildren(data.node);
        leafChildren = leafChildren.reverse();
        leafChildren.each(function(leafNode){
            var parents = getParents(leafNode);
            var parentTexts = parents.map(function(node){return node.text;});
            parentTexts = parentTexts.reverse();
            var path = parentTexts.add(leafNode.text).join('/'); 
            addPlotContainer(leafNode.id, path);
        });
    });
    graphToggleElt.on("deselect_node.jstree", function (e, data) {
        var leafChildren = getAllLeafChildren(data.node);
        leafChildren.each(function(leafNode){
            removePlotContainer(leafNode.id);
        });
    });
    
});
