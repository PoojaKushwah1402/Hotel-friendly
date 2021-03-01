
const setStorage = data => {


    if(Object.keys(data).length) {
        const list = JSON.parse(localStorage.getItem('list')) || [];
        list.push(data)
        localStorage.setItem('list',JSON.stringify(list));
        console.log(list);
    } 
}

export default setStorage;