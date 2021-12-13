$(document).ready(function () {
  
  let currentFloor = 2; 
  const floorPath = $('.home-image path'); 
  const counterUp = $('.counter-up'); 
  const counterDown = $('.counter-down');
  const modal = $('.modal');
  const modalCloseBtn = $('.modal-close-button');
  const viewFlatsBtn = $('.view-flatts');

  floorPath.on('mouseover', function() {
    floorPath.removeClass('current-floor'); 
    currentFloor = $(this).attr('data-floor'); 
    $('.counter').text(currentFloor);
  });

  floorPath.on('click', toggleModal);

  modalCloseBtn.on('click', toggleModal);

  viewFlatsBtn.on('click', toggleModal);

  counterUp.on('click', function() { 
    if (currentFloor < 18) { 
      currentFloor++; 
      const usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false}); 
      $('.counter').text(usCurrentFloor); 
      floorPath.removeClass('current-floor'); 
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor'); 
    }
  });

  counterDown.on('click', function() {
    if (currentFloor > 2) {
      currentFloor--;
      const usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
      $('.counter').text(usCurrentFloor);
      floorPath.removeClass('current-floor');
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
    }
  })

  function toggleModal() {
    modal.toggleClass('is-open-modal');
  }
});