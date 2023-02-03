import MakeF1 from "../firstleft/MakeF1"
import MakeF2 from "../firstleft/MakeF2";
import MakeF3 from "../firstleft/MakeF3";
import MakeF4 from "../firstleft/MakeF4";
import Quicktext from "../second/Quicktext";
import Sandbox from "../second/Sandbox";
import Test from "../second/Test";

const Handelstate=(state,action)=>{
   switch(action.type){
    case 'fun1':
        state=<MakeF1></MakeF1>;
        break;
    case 'fun2':
        state=<MakeF2></MakeF2>;
        break;
    case 'fun3':
        state=<MakeF3></MakeF3>;
        break;
    case 'fun4':
        state=<MakeF4></MakeF4>;
        break;
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
        state=<MakeF1></MakeF1>
   }
   return state
}
export default Handelstate;