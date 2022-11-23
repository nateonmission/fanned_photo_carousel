let activeIndex = 3;

const groups = document.getElementsByClassName("collection");

const goright = () => {

    const nextIndex = activeIndex + 1 <= groups.length ? activeIndex + 1 : 1;


    for(let i = 0; i < groups.length; i++){
        groups[i].dataset.index = parseInt(groups[i].dataset.index) + 1 <= groups.length ? parseInt(groups[i].dataset.index) + 1 : 1;
    }


    const one = document.querySelector(`[data-index="1"]`);
    const two =  document.querySelector(`[data-index="2"]`);
    const three = document.querySelector(`[data-index="3"]`);
    const four =  document.querySelector(`[data-index="4"]`);
    const five = document.querySelector(`[data-index="5"]`);
    

    one.dataset.state = "onLeft";
    two.dataset.state = "onLeft"
    three.dataset.state = "activeFromLeft";
    four.dataset.state = "onRight"
    five.dataset.state = "onRight";
    

    setTimeout(() => {
        three.dataset.state = "active";
    }, 300)

}



const goleft = () => {

    for(let i = 0; i < groups.length; i++){
        groups[i].dataset.index = parseInt(groups[i].dataset.index) - 1 >= 1 ? parseInt(groups[i].dataset.index) - 1 : groups.length;
    }

    const one = document.querySelector(`[data-index="1"]`);
    const two =  document.querySelector(`[data-index="2"]`);
    const three = document.querySelector(`[data-index="3"]`);
    const four =  document.querySelector(`[data-index="4"]`);
    const five = document.querySelector(`[data-index="5"]`);
    

    one.dataset.state = "onLeft";
    two.dataset.state = "onLeft"
    three.dataset.state = "activeFromRight";
    four.dataset.state = "onRight"
    five.dataset.state = "onRight";
    

    setTimeout(() => {
        three.dataset.state = "active";
    }, 300)

}