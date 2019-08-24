var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest",
        image: "https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget blandit velit. Donec elit velit, dignissim vitae dolor id, lacinia commodo ex. Proin convallis mollis erat at feugiat. Phasellus eget convallis dui, quis viverra nibh. Mauris sollicitudin enim id nunc sollicitudin ornare. Proin vehicula mauris non erat dapibus, vel imperdiet tellus dictum. Ut tortor ipsum, fermentum vel elit dictum, tincidunt convallis felis. Phasellus vitae metus quis lorem feugiat accumsan vitae quis dui. Nunc commodo arcu porta ante fermentum ullamcorper. Maecenas id libero posuere, commodo massa eu, consectetur velit. Mauris aliquet ante quis tellus pharetra, ut commodo nunc volutpat. Suspendisse sit amet libero est. Nunc eu sollicitudin lectus. In at arcu ex. Vestibulum nec sollicitudin libero."
    },
    {
        name: "Desert Mesa",
        image: "https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget blandit velit. Donec elit velit, dignissim vitae dolor id, lacinia commodo ex. Proin convallis mollis erat at feugiat. Phasellus eget convallis dui, quis viverra nibh. Mauris sollicitudin enim id nunc sollicitudin ornare. Proin vehicula mauris non erat dapibus, vel imperdiet tellus dictum. Ut tortor ipsum, fermentum vel elit dictum, tincidunt convallis felis. Phasellus vitae metus quis lorem feugiat accumsan vitae quis dui. Nunc commodo arcu porta ante fermentum ullamcorper. Maecenas id libero posuere, commodo massa eu, consectetur velit. Mauris aliquet ante quis tellus pharetra, ut commodo nunc volutpat. Suspendisse sit amet libero est. Nunc eu sollicitudin lectus. In at arcu ex. Vestibulum nec sollicitudin libero."
    },
    {
        name: "Canyon Floor",
        image: "https://farm3.staticflickr.com/2311/2123340163_af7cba3be7.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget blandit velit. Donec elit velit, dignissim vitae dolor id, lacinia commodo ex. Proin convallis mollis erat at feugiat. Phasellus eget convallis dui, quis viverra nibh. Mauris sollicitudin enim id nunc sollicitudin ornare. Proin vehicula mauris non erat dapibus, vel imperdiet tellus dictum. Ut tortor ipsum, fermentum vel elit dictum, tincidunt convallis felis. Phasellus vitae metus quis lorem feugiat accumsan vitae quis dui. Nunc commodo arcu porta ante fermentum ullamcorper. Maecenas id libero posuere, commodo massa eu, consectetur velit. Mauris aliquet ante quis tellus pharetra, ut commodo nunc volutpat. Suspendisse sit amet libero est. Nunc eu sollicitudin lectus. In at arcu ex. Vestibulum nec sollicitudin libero."
    }
]


function seedDB(){
    // Remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        } else {
            console.log("Removed campgrounds!");
        }
        // Add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                } else {
                    console.log("added a campground");
                    // Create a comment
                    Comment.create(
                        {
                            text: "This place is great, but I wish there was internet.",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else{
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment");
                            }
                        });
                }
            });
        });
    });
    // Add a few comments
}

module.exports = seedDB;