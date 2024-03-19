const $gifArea = $("#gif-area");
const $searchInput = $("#search");

function nextGif(res) {
  let numResults = res.data.length;
  if (numResults) {
    let randomIdx = Math.floor(Math.random() * numResults);
    let $newColumn = $("<div>", { class: "col-md-4 col-12 mb-4" });
    let $nextGif = $("<img>", {
      src: res.data[randomIdx].images.original.url,
      class: "w-100"
    });
    $newColumn.append($nextGif);
    $gifArea.append($newColumn);
  }
}

$("form").on("submit", async function(e) {
  e.preventDefault();

  let searchTerm = $searchInput.val();
  $searchInput.val("");

  const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: searchTerm,
      api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
    }
  });
  nextGif(response.data);
});

$("#remove").on("click", function() {
  $gifArea.empty();
});