window.onload = function() {
  
  document.querySelector("#titlebanner h1").classList.add("tp");
  
  document.querySelector("#titlebanner h1").onclick = function() {    
    this.classList.toggle("yellow");
  }
  
  document.querySelector("#columns #ingredients").onclick = function() {
    this.classList.toggle("tpShow")
  }
  
  document.querySelector("#columns #equipment").onclick = function() {
    this.classList.toggle("tpShow")
  }
  
  document.querySelector("#columns #directions").onclick = function() {
    this.classList.toggle("tpShow")
  }
  
  document.querySelector("#columns #directions ol").innerHTML += "<li>Enjoy as you please!</li>";
  
  
} 