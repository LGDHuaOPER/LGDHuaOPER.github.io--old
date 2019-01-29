//
// Only For Post
//

$(document).ready(function(){

  $.ajax({
    type: "get",
    url: sitefile,
    dataType: "json",
    success: function (data) {
      $("#totalPosts").text(data.site.totalPosts);
      $("#totalWords").text(data.site.totalWords);
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      alert("Sitefile的JSON格式化错误" + errorThrown);
    }
  });

});
