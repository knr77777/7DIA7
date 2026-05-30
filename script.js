function showTab(tabId){

  let contents = document.querySelectorAll('.content');

  contents.forEach(content => {
    content.style.display = 'none';
  });

  document.getElementById(tabId).style.display = 'block';
}