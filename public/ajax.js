$("#searchForm").submit(function(e){
  e.preventDefault();
  var search = $(this).serialize();

  $.get("/campgrounds", search, function(foundItems){
    $("div.col-md-3").remove();
    $.each(foundItems, function(){
      $("div.row").append('<div class="col-md-3 col-sm-6"><div class="thumbnail text-center"><img src=' + this.image + '><div class="caption"><h4>' + this.name + '</h4></div><p><a href="/campgrounds/' + this._id + '" class="btn btn-primary">More info</a></p></div></div>')
    })
  });
});
