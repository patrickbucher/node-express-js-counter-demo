'use strict';

const baseURL = 'http://localhost:8000';

const fetchCount = (callback) => {
    const endpoint = `${baseURL}/count`;
    fetch(endpoint)
        .then(response => response.json())
        .then(body => callback(body.counter));
};

const incrementCount = (callback) => {
    const endpoint = `${baseURL}/increment`;
    fetch(endpoint, { method: 'PUT' })
        .then(response => response.json())
        .then(body => callback(body.counter));
};

document.addEventListener('DOMContentLoaded', () => {
    const count = document.getElementById('count');
    fetchCount((value) => {
        count.innerHTML = value;
    });

    const button = document.getElementById('increment');
    button.addEventListener('click', () => {
        incrementCount((value) => {
            count.innerHTML = value;
        });
    });
});