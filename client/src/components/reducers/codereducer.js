const coderun=(state1,action)=>{
    if(action.type==='coderun'){
        return state1?'#15314b':'#15314b'
    }
    return state1
}

export {coderun}