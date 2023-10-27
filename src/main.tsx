//react项目主依赖
import React from 'react'
import ReactDOM from 'react-dom/client'
//导入项目根组建
import App from './App.tsx'
//将节点渲染到id位root的节点上
ReactDOM.createRoot(document.getElementById('root')!).render(
    <App />
)
