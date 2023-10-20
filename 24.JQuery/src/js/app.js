$(document).ready(function(){
    $("button").click(function(){
        $("p").hide();
    });

    document.querySelector("button").addEventListener("click", function() {
        document.querySelectorAll("p").forEach(element => {
            element.style.display = "none"
        })
    })
});