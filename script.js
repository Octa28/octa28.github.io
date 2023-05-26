window.addEventListener('load', function() {
  var welcomeHeading = document.getElementById('welcome-heading');
  var text = "SiteCritique - A Community for Critiquing";
  var words = text.split(' ');
  welcomeHeading.textContent = ''; // Clear existing text

  words.forEach(function(word, index) {
    var span = document.createElement('span');
    span.textContent = word + ' ';
    span.style.animationDelay = (index * 0.2) + 's'; // Adjust the delay duration as needed
    welcomeHeading.appendChild(span);
  });

  welcomeHeading.classList.add('animate');
});

function showFullImage(imageUrl) {
  var fullImageOverlay = document.getElementById('full-image-overlay');
  var fullImage = document.getElementById('full-image');

  fullImage.src = imageUrl;
  fullImageOverlay.classList.add('show');
}

function hideFullImage() {
  var fullImageOverlay = document.getElementById('full-image-overlay');

  fullImageOverlay.classList.remove('show');
}

// JavaScript code for rating functionality
window.addEventListener('DOMContentLoaded', function() {
  // Retrieve the image container element
  var imageContainer = document.getElementById('image-container');

  // Simulated data - replace with actual data from server


  // Generate image boxes with ratings and comments
  imagesData.forEach(function(data) {
    var imageBox = document.createElement('div');
    imageBox.className = 'image-box';

    var image = document.createElement('img');
    image.src = data.imageUrl;
    image.alt = 'Website Screenshot';

    var rating = document.createElement('div');
    rating.className = 'rating';
    rating.textContent = 'Rating: ' + data.rating + '/5';

    var comments = document.createElement('div');
    comments.className = 'comments';
    comments.textContent = 'Comments: ' + data.comments;

    imageBox.appendChild(image);
    imageBox.appendChild(rating);
    imageBox.appendChild(comments);

    imageContainer.appendChild(imageBox);
  });
});

document.addEventListener("DOMContentLoaded", function() {
  // Update the background position based on scroll
  window.addEventListener("scroll", function() {
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop;
    const background = document.getElementById("earth-background");
    background.style.backgroundPositionY = -scrollPos / 2 + "px";
  });
});
