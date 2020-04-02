  
let form = document.getElementById("create-task-form");
let ul = document.querySelector("#tasks");
let input = document.getElementsByName("new-task-description")[0];

document.addEventListener("DOMContentLoaded", () => {
  // let form = document.getElementsByTagName("form")
  // your code here

  //Goal: Enable to  add list of todos on the event of 'submitting'
  //1.Grab the tag where submit is happening
  //2.Find where list of toods are going to be
  //3.Add it!

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    // console.dir(input)
    if (event.target === form) {
      return ul.innerHTML += `<li>${event.target.childNodes[3].value}
    <button type="submit"  data-description=${event.target.childNodes[3].value}>X</button>
    </li>`;
    }
  });

  ul.addEventListener("click", function (event) {
    return event.target.parentNode.remove();
  });
});