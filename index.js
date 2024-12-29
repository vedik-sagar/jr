document.querySelectorAll('.clickable_div').forEach(div => {
    div.addEventListener('click', function() {
      const targetId = div.getAttribute('data-target');
      const targetElement = document.querySelector(targetId);

      // Scroll to the target section smoothly
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });