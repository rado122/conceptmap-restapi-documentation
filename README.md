##Maps
**Table of content:**

1. [Create a Map](#create)
2. [Retrieve a Map](#retrieve)
3. [Update a Map](#update)
4. [Delete a Map](#delete)
5. [List of all Maps](#list)

**JSON example of a map object:**

```json

{

    "title": "Sample Map",
    "id": 2,
    "concepts": [
        {
            "id": 1,
            "label": "First Concept",
            "posx": "461",
            "posy": "39"
            },
        {
            "id": 2,
            "label": "Second Concept",
            "posx": "31",
            "posy": "111"
            }
        ],
    "relationships": [
        {
            "id": 1,
            "source": "1",
            "target": "2",
            "label": "Relationship between conceps one and two"
        }
     ]
}

```

###<a id="create"></a>Create a Map

|Request Method|Request Endpoint|
|--------------|----------------|
|POST          | /maps          |


####Request Parameters
|Parameter|Description     |
|---------|-----------     |
|title    |Title of the map|  

####Request Example:

```javascript
$.post("/maps",
{
	"title":"My Map"
},
function(){
	alert('Map creation successful');
});
  
```

####Response Example:

```javascript
HTTP/1.1 200 Created
Content-Type:application/json;charset=UTF-8
{
  "message":"The map has been created",
  "map":
  {
    "title": "What is Cmap",
    "id": 1,
    "concepts": [],
    "relationships": []
  }
  	

```

###<a id="retrieve"></a>Retrieve a Map

|Request Method|Request Endpoint|
|--------------|----------------|
|GET           | /maps/{map_id} |


####Request Parameters
**None**

####Request Example:

```javascript
$.get("/maps/1",
function(data, status){
	 alert("Data: " + data + "\nStatus: " + status);
});
  
```

####Response Example:

```javascript
HTTP/1.1 200 OK
Content-Type:application/json;charset=UTF-8
{
  "message":"Map retrieving successful",
  "map":
  {
    "title": "What is Cmap",
    "id": 1,
    "concepts": [
    {
      "id": 1,
      "label": "CmapWeb",
      "posx": "211",
      "posy": "31"
    }],
    "relationships": []
  }


```

###<a id="update"></a>Update a Map

|Request Method|Request Endpoint|
|--------------|----------------|
|PUT           | /maps/{map_id} |


####Request Parameters
|Parameter|Description                     |
|---------|-----------                     |
|title    |Title of the map                |  
|concepts |List of concept objects         |
|relationships|List of relationship objects|
>All parameters are optional

####Request Example:

```javascript
$.ajax({
    url: '/maps/1',
    type: 'PUT',
    data:{
    	"concepts":[
            {
                "id": "1",
                "label": "CmapWeb",
                "posx": "211",
                "posy": "31"
            },
            {
                "id": "2",
                "label": "Concept Map Web editor",
                "posx": "391",
                "posy": "121"
            }
        ]
    }
    success: function(data, status){
	 alert("Data: " + data + "\nStatus: " + status);
	});
  
```

####Response Example:

```javascript
HTTP/1.1 200 OK
Content-Type:application/json;charset=UTF-8
{
  "message":"The map has been updated",
  "map":
  {
    "title": "What is Cmap",
    "id": 1,
    "concepts":[
            {
                "id": "1",
                "label": "CmapWeb",
                "posx": "211",
                "posy": "31"
            },
            {
                "id": "2",
                "label": "Concept Map Web editor",
                "posx": "391",
                "posy": "121"
            }
        ],
    "relationships": []
  }
  	

```

###<a id="delete"></a>Delete a Map

|Request Method|Request Endpoint|
|--------------|----------------|
|DELETE        | /maps/{map_id} |


####Request Parameters
**None**
####Request Example:

```javascript
$.ajax({
    url: '/maps/1',
    type: 'DELETE',
    success: function(data, status){
	 alert("Data: " + data + "\nStatus: " + status);
	});
  
```

####Response Example:

```javascript
HTTP/1.1 200 OK
Content-Type:application/json;charset=UTF-8
{
  "message":"The map has been deleted" 
}
  	

```

###<a id="list"></a>List of all Maps

|Request Method|Request Endpoint|
|--------------|----------------|
|GET           | /maps          |


####Request Parameters
**None**

####Request Example:

```javascript
$.get("/maps",
function(data, status){
	 alert("Data: " + data + "\nStatus: " + status);
});
  
```

####Response Example:

```javascript
HTTP/1.1 200 OK
Content-Type:application/json;charset=UTF-8
{
  "message":"All Maps retrieved successful",
  "maps":[
        {

          "title": "What is Cmap",
          "id": 1,
          "concepts": [
              {
                  "id": 1,
                  "label": "CmapWeb",
                  "posx": "211",
                  "posy": "31"
                  },
              {
                  "id": 2,
                  "label": "Concept Map Web editor",
                  "posx": "391",
                  "posy": "121"
                  }
              ],
          "relationships": [
              {
                  "id": 1,
                  "source": "1",
                  "target": "2",
                  "label": "is short for"
              }
              ]
      },
      {

    "title": "Sample Map",
    "id": 2,
    "concepts": [
        {
            "id": 1,
            "label": "First Concept",
            "posx": "461",
            "posy": "39"
            },
        {
            "id": 2,
            "label": "Second Concept",
            "posx": "31",
            "posy": "111"
            }
        ],
    "relationships": [
        {
            "id": 1,
            "source": "1",
            "target": "2",
            "label": "Relationship between conceps one and two"
        }
        ]
		}
      
	]
  


```
