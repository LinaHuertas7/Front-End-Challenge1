const modal_btn_open = document.getElementById("modal_btn_open");
const modal_container = document.getElementById("modal_container");

//Listen to click on the open btn
modal_btn_open.addEventListener("click", () => {
  //Draw in modal_container
  modal_container.innerHTML =
    //HTML code
    `
  <div class="modal" id="modal">
          <div class="modal-content">
            <button class="modal-btn-closed" id = "modal-btn-closed">x</button>
          
          <!--           Container image         -->
            <div class="modal-container-img">
      <div class="modal-card-main-image">
        <img src="img/image-product-1.jpg" alt="main product image">
      </div>
      <div class="modal-card-carousel-secundary">
        <img src="img/image-product-1-thumbnail.jpg" alt="image-product-1-thumbnail">
        <img src="img/image-product-2-thumbnail.jpg" alt="image-product-2-thumbnail">
        <img src="img/image-product-3-thumbnail.jpg" alt="image-product-3-thumbnail">
        <img src="img/image-product-4-thumbnail.jpg" alt="image-product-4-thumbnail">
      </div>
    </div>
    </div>
  </div>
  `;
  //Lisent to click on the close btn
  document.getElementById("modal").addEventListener("click", (e) => {
    //Print where push click
    console.log(e.target.id);
    if (e.target.id === "modal" || e.target.id === "modal-btn-closed") {
      //Draw any in the modal_container - Return de main page
      modal_container.innerHTML = "";
    }

    document.getElementById();
  });

  //Close the modal page with ESC - Escape key
  document.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      modal_container.innerHTML = "";
    }
  });
});
