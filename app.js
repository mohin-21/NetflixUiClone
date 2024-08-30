
let coll = document.querySelectorAll(".collapsible");
coll.forEach(button => {
    button.addEventListener("click", function() {
        //Close all other collapsibles
        coll.forEach(btn => {
          if (btn != button) {
            btn.classList.remove("active");
            btn.nextElementSibling.style.display = "none";
          }
        });

      this.classList.toggle("active");
      let content = this.nextElementSibling;
      if(content.style.maxHeight){
        content.style.maxHeight = null;
      }else {
        this.nextElementSibling.style.display = "block";
        content.style.maxHeight = content.scrollHeight + "px";
       
      }
    });
});



