const getGoods = () => {
    const links = document.querySelectorAll('.navigation-link');

    const getData = () => {
        fetch('https://wildberries-training-project-default-rtdb.firebaseio.com/db.json') 
        .then((res) => res.json())
        .then((data) => {
            localStorage.setItem('data', JSON.stringify(data));
            console.log(data);
        })
    }

    links.forEach((link) => {
        link.addEventListener('click',(event) => {
            event.preventDefault();
            getData();
        })
    })

    // const data = localStorage.setItem('data', JSON.stringify(links));

    // const goods = JSON.parse(localStorage.getItem('data'));

    // // localStorage.removeItem('goods');

    // const getLoots = JSON.parse(localStorage.getItem('goods'));

    // console.log(data);
}

getGoods();