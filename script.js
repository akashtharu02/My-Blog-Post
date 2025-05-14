// Enhanced Search Functionality
document.getElementById('search-button').addEventListener('click', performSearch);
document.getElementById('search-input').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') performSearch();
});

function performSearch() {
  const searchQuery = document.getElementById('search-input').value.toLowerCase().trim();
  if (searchQuery) {
    const posts = document.querySelectorAll('.blog-post');
    let found = false;

    posts.forEach(post => {
      const text = post.textContent.toLowerCase();
      post.style.display = text.includes(searchQuery) ? 'block' : 'none';
      if (text.includes(searchQuery)) found = true;
    });

    if (!found) {
      alert('No matching posts found. Try different keywords.');
    }
  }
}

// Filter Functionality
const filterButtons = document.querySelectorAll('.filter-buttons button');
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');
    filterPosts(category);
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});

function filterPosts(category) {
  const posts = document.querySelectorAll('.blog-post');
  posts.forEach(post => {
    const postCategory = post.getAttribute('data-category');
    if (category === 'all' || postCategory === category) {
      post.style.display = 'block';
    } else {
      post.style.display = 'none';
    }
  });
}



// ... (keep all other JavaScript the same) ... 


function myFunction(button) {
  var postContent = button.parentElement;
  var dots = postContent.querySelector('.dots');
  var moreText = postContent.querySelector('.more');

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    button.innerHTML = "Read More";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    button.innerHTML = " Read Less ";
    moreText.style.display = "inline";
  }
}


// Initialize button state on page load
document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('BtnSeeMore');
  btn.innerHTML = "Read More";
});
