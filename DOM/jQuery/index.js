// $("h1").addClass("big-title");
// $("h1").removeClass("big-title");
// $("h1").text("Bye");
// $("button").html("<em>Hey</em>");
// $("a").attr("href", "https://www.yahoo.com");
// $("h1").click(function () {
//   $("h1").css("color", "purple");
// });
$("button").click(function () {
  $("h1").css("color", "purple")
});
$("h1").on("mouseover", function() {
  $("h1").css("color", "purple");
});
$("h1").before("<button>New</button>")
$("h1").after("<button>New</button>")
$("h1").prepend("<button>New</button>")
$("h1").append("<button>New</button>")