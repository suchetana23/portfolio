const hamburger = document.getElementById('hamburger'); 
const menu = document.querySelector('.menu'); 

hamburger.addEventListener('click', function () { 
	const hamIcon = this.querySelector('.hamburger-icon'); 
	const crossIcon = this.querySelector('.cross-icon'); 
	if (hamIcon.style.display === "none") { 
		hamIcon.style.display = "inline-block"
		menu.style.display = "none"
		crossIcon.style.display = "none"
	} 
	else { 
		crossIcon.style.display = "inline-block"
		hamIcon.style.display = "none"
		menu.style.display = "block"
	} 
});

document.addEventListener('DOMContentLoaded', function() {
    const pinkBox = document.querySelector('.pink-box');
  
    document.addEventListener('mousemove', function(event) {
      const x = event.clientX;
      const screenWidth = window.innerWidth;
  
      if (x >= screenWidth - 50) { // Adjust the threshold (50px from right) as needed
        pinkBox.classList.remove('hidden');
      } else {
        pinkBox.classList.add('hidden');
      }
    });
  });

  
  document.getElementById("button2").addEventListener("click", function() 
  {
    window.location.href = "resume.html";
});
