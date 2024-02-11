
import PropTypes from 'prop-types';

function Extend({Language ="HTML"}) {
    return (
      <div className="w-4/5 h-10 bg-slate-500 text-white text-2xl text-center border-black relative left-8 mt-2 rounded-md">
        <h2> {Language }</h2>
      </div>
    )
    }
    
    Extend.propTypes = {                    //This is done to remove the Eslint error which was showind props validation is missing
      Language : PropTypes.string,
    }
   

  export default Extend
  


  