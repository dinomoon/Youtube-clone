import axios from "axios";
const commentForm = document.querySelector(".comment__form");
const commentList = document.querySelector(".comment__list");
let commentNumber = document.querySelector(".video__comments--number");

const increaseNumber = () => {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) + 1;
};

const addComment = (comment) => {
  const li = document.createElement("li");
  li.innerHTML = comment;
  commentList.prepend(li);
  increaseNumber();
};

const sendComment = async (comment) => {
  const videoId = window.location.href.split("/videos/")[1];
  const response = await axios({
    url: `/videos/${videoId}/comment`,
    method: "POST",
    data: {
      comment,
    },
  });
  if (response.status === 200) {
    addComment(comment);
  }
};

const handleSubmit = (event) => {
  event.preventDefault();
  const commentInput = commentForm.querySelector("input");
  const comment = commentInput.value;
  sendComment(comment);
  commentInput.value = "";
};

function init() {
  commentForm.addEventListener("submit", handleSubmit);
}

if (commentForm) {
  init();
}
