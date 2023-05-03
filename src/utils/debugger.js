

exports.debug = (string) => {
    if(process.env.REACT_APP_DEBUG === "true"){
        console.log(string);
    };
}