var imageURL;
function get_image() {
  document.getElementById("image").src="https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif";
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
function download_image()
{
    fetch(imageURL)
    .then(resp => resp.blob())
    .then(blobobject => {
        const blob = window.URL.createObjectURL(blobobject);
        const anchor = document.createElement('a');
        anchor.style.display = 'none';
        anchor.href = blob;
        anchor.download = document.getElementById("search").value;
        document.body.appendChild(anchor);
        anchor.click();
        window.URL.revokeObjectURL(blob);
    })
    .catch(() => console.log('An error in downloading the file sorry'));
}
