{
    const welcome = () => {
        console.log ("Cześć");
    }
    
    const onChangeBackgroundClick = () => {
        const body = document.querySelector(".body");
        const themeName = document.querySelector(".themeName");
       
        body.classList.toggle("dark");
        themeName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";    
    };

    const init = () => {
        const changeBackgrounButton = document.querySelector(".themeName");
        changeBackgrounButton.addEventListener("click", onChangeBackgroundClick);

    welcome ();   
    
};

init();
}