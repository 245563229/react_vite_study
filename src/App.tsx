// 项目跟组建

import {useState} from 'react'
//jsx X（XML)即在js代码中编写html模版，浏览器本身不能识别jsx
//通过babel解析工具进行解析
const name: string = '前段小葛'
interface ListType {
    id:string,
    value:string
}
const list:ListType[] = [
    {id:'10',value:'100'},
    {id:'20',value:'122'},
    {id:'30',value:'133'},
]
const getSex = ()=>{
    return '男'
}
const divType:Number = 2
const showDivType = ()=>{
    if (divType === 1){
        return <div>type是1</div>
    }else{
        return <div>type是{divType}</div>
    }
}
const ifShow:Boolean=true
const handleClick = (e)=>{
    console.log('点击了按钮',e)
}
const CsBtn=()=>{
    return <button>csBtn</button>
}
function App() {
    return (
        <div>
            <h1>Vite + React</h1>
            {'this is oo'}
            <div> {name}</div>
           <p>{getSex()}</p>
            {new Date().getDate()}
            <div style={{color:'red'}}>red</div>
            <div>
                {
                    list.map(item=><p key={item.id}>{item.value}</p>)
                }
            </div>
            {/*条件判断是否显示&&*/}
            {ifShow && <div>是否显示</div>}
            {showDivType()}
            <button onClick={handleClick}>点我</button>
            <CsBtn />
        </div>
    )
}

export default App
