const RandomString = () => {
    let length = 50; 
    let randStr = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charactersLength);
        randStr += characters.charAt(randomIndex);
    }
    return randStr;
}

export default RandomString;