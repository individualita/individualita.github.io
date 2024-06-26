function doSomething() {
    console.log('Я её вызвал.');

    setTimeout(() => {
        console.log('вызвано через 3 сек')
    }, 3000)
}

export default doSomething;