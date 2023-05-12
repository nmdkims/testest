window.onload = () => {
  console.log("로딩 완료!");
  handleReviewCreate();
}

async function handleReviewCreate() {
  const title = document.getElementById('review-title').value;
  const content = document.getElementById('review-title').value;
  const star = document.getElementById('star').value;
  console.log(title, content, star);

  const response = await fetch('http://127.0.0.1:8000/reviews/room/<int:room_id>/', {
    headers: {
      'content-type': 'application/json',
    },
    method: 'POST',
    body: {
      "review-title": title,
      "review-title": content,
      "star": star
    }
  })


}


