
import Quicktext from "../second/Quicktext";
import Sandbox from "../second/Sandbox";
import Test from "../second/Test";

const Handelstate2=(state,action)=>{
   switch(action.type){
    case 'fun5':
        state=<Test></Test>;
        break;
    case 'fun6':
        state=<Quicktext></Quicktext>;
        break;
    case 'fun7':
        state=<Sandbox></Sandbox>;
        break;


    default:
        state=<Test></Test>;
   }
   return state
}
export default Handelstate2;