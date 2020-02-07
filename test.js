const options = { theme: "snow" };
var divs = document.getElementsByTagName("div");
var initializeQuill = function (e){
     if(!this.quill){
        console.log(e);
        this.target = event.currentTarget;
        console.log(this.target);
        this.quill = new Quill(this.target, options);
        this.target.children[0].onclick = function(et) { et.preventDefault(); };
        this.target.children[0].onblur = function(l) {
               l.target.parentElement.quill.close;
         };
        }
        this.quill.focus();
        e.stopPropagation();
        e.preventDefault();
}
for(var i = 0; i < divs.length; i++){
    divs[i].onclick = initializeQuill;
}