const {debug} = require('../utils/debugger');

const ErrorAPI = ({errorObj, setError}) => {
  debug(`ErrorAPI`);
  return (
    <div id="errorAPI">
      {/* <h1>Issue calling database, message received was: {errorMsg}</h1> */}
      <h4>Issue calling the database, the output received was: </h4>
      <h4>- Status Code: {errorObj.code}</h4>
      <h4>- Error message: "{errorObj.msg}" </h4>
    </div>
  );
};


export default ErrorAPI;