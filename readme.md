# Overview

Get a feeling for working with Backbone.js modules in the browser.

In this repository, there are two examples provided:
* start: This is an empty application providing minimum stylesheet and HTML to start prototyping and to follow the examples in the book. 
* browserify: In this example, some Backbone models and collections are packaged with Browserify. Also, it uses JSON data that you can use to explore data in the browser.
* bb-attributes: This example shows how attributes can be associated with a Backbone collection 

When you want to follow the examples of the book, go to the "start" folder. Otherwise go to the `browserify` example. There, you can start the application with a static web server, such as super static:

    $ ss .
    Server started on port 3474

Now, you can open a browser and play with the Backbone models from the web browser

![dev console tag](https://github.com/pipefishbook/ch_2/blob/master/dev_console.png)

For example, you could `get` and `set` attributes of a model with:

    > movies = require('app');
    > movie = movies.get(1);
       Object {id: 1, title: "The Artist", year: 0, description: "empty", selected: false}
    > movie.get('title'); 
       "The Artist"
    > movie.set('title', 'Taxi driver'); 
       "Taxi driver"


Sometimes, it is difficult to see how to organize models and collections. Normally, a model manages data attributes. But some collections can benefit from attributes too, for example to keep track on what models are selected.

For this, the Backbone.Attributes plugin from Adam Krebs can be used:

    > movies = require('movies')
    > movies.setAttribute('selected', true)

You can see the events firing:

    app.js:8 change:selected

![backbone attributs](https://github.com/pipefishbook/ch_2/blob/master/backbone_attributes.png)
