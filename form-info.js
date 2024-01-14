const formInfo = document.querySelector('#form-info');

const params = new URLSearchParams(window.location.search);

let infoCount = 0;

params.forEach((value, key) => {
    if (infoCount < 4) {
        formInfo.append(`${key} = ${value}`);
        formInfo.append(document.createElement('br'));
        infoCount++;
    }
})