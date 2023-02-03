import Customop from "../Lastright/Customop"
import Rawop from "../Lastright/Rawop";

const Handelstate4=(state,action)=>{
    switch(action.type){
        case 'fun9':
            state=<Customop></Customop>;
            break;
        case 'fun10':
            state=<Rawop></Rawop>;
            break;
        default:
            state=<Customop></Customop>
    }
    return state
}
export default Handelstate4