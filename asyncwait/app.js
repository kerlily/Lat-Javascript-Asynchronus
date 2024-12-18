const hello = async () => {
    // throw 'error';
    return 'hello';
};

hello().then((res) => {
    console.log('repssnse', res);
}).catch((err) => {
    console.log('wkekwekw', err);
})