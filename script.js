function get_image() {
  document.getElementById("image").src="loader.gif";
  let keyword = document.getElementById("search").value;
  let width = document.getElementById("width").value;
  let height = document.getElementById("height").value;

  let api = `https://source.unsplash.com/${width}x${height}/?${keyword}`;
  // console.log(api);
fetch(api).then(
    (response) => {
        console.log(response);
        return response.url;
        })
        .then((url) => {
        imageURL=url;
        document.getElementById("image").src=url
        document.getElementById("dwld_btn").style.display="block";
        });

}
