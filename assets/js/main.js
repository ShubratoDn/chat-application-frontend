var receiverInfoButton = document.querySelector("#receiver-info-button");
var receiverInfoContainer = document.querySelector("#receiver-info-container");
var conversation = document.querySelector("#conversation");
var toggleReceiverContainerButton = document.getElementById("toggleReceiverContainerButton");
var currentWidth = 0;

receiverInfoButton.addEventListener('click', function(){
    
    if(currentWidth > 1200){        
        receiverInfoContainer.style.height = "100%";
        if(receiverInfoContainer.clientWidth > 0){
            receiverInfoContainer.style.width = "0%";
            receiverInfoContainer.style.opacity = "0";
            receiverInfoButton.classList.remove("active");
            conversation.style.width = "100%";
    
        }else if(receiverInfoContainer.clientWidth <= 0){
            conversation.style.width = "70%";
            receiverInfoContainer.style.width = "30%";
            receiverInfoContainer.style.opacity = "1";
            receiverInfoButton.classList.add("active");            
        }
    }else{
        toggleReceiverContainerResponsive()
    }
});


toggleReceiverContainerButton.addEventListener('click', toggleReceiverContainerResponsive)
function toggleReceiverContainerResponsive(){
    if(currentWidth < 1200){
        receiverInfoContainer.width = "100%";
        if(receiverInfoContainer.clientHeight > 0 ){
            receiverInfoContainer.style.height = 0;
            toggleReceiverContainerButton.style.display = "none";
        }else if(receiverInfoContainer.clientHeight <= 0){
            toggleReceiverContainerButton.style.display = "block";
            receiverInfoContainer.style.height = "100%";
        }
    }
}


window.onload = () => currentWidth = window.innerWidth;
window.onresize = () => currentWidth = window.innerWidth;

// window.onresize = () =>{
//     if(window.innerHeight > 1200){
//         console.log("working 1" + window.innerHeight)
//         receiverInfoContainer.style.height = "100%";
//     }else{
//         console.log("working 2")
//         receiverInfoContainer.style.height = "00%";
//     }
// }