"use strict";

//var givenData = CreateMapAndReturnObjectWith();
//
//YUI().use('node','io', function (Y) {
//    //Buttons variables
//    var createMapButton = Y.one('#create-map');
//    var showMapsButton = Y.one('#list-maps');
//    var deleteMapButton = Y.one('#delete-map');
//    var saveMapButton = Y.one('#save-map');
//    
//    //create new map
//    
//    createButton.on('click',function(e){
//        
//        } );
//});


var currnetMap = {};

function loadMap(map) {
    currnetMap = map;
}

function addConcept(label, posx, posy) {
    currnetMap.concepts.push({
       "label":label,
       "posx":posx,
       "posy":posy
    });
}

function addRelationship(label, source, target) {
    currnetMap.relationships.push({
        "label":label,
        "source":source,
        "target":target
        });
}

function updateConcept(id, label, posx, posy) {
    //code
}

function updateRelationshp(id, label, posx, posy) {
    //code
}    

function deleteConcept(id) {
    //code
}

function deleteRelationship(id) {
    //code
}

function createMap(title) {
    var requestResponse;
    YUI().use('io-base',function(Y){
        var uri = "maps",
         json = {"title":title},
         cfg = {
            method: 'POST',
            data: Y.JSON.stringify(jData),
             headers: {
                'Content-Type': 'application/json',
             },
             on:{
                
                success: function (id, response) {
                 requestResponse =  response.responseText; 
                }
             }
            };
        });
    //do something with response
}

function saveMap(id) {
   
}

