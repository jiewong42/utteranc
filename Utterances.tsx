import React, { useEffect } from 'react';

// 定义一个名为 Utterances 的 React 函数组件
const Utterances: React.FC = () => {
  // 使用 useEffect 钩子来处理副作用
  useEffect(() => {
    // 创建一个新的 script 元素
    const script = document.createElement('script');
    // 设置 script 元素的 src 属性为 Utterances 的客户端脚本 URL
    script.src = 'https://utteranc.es/client.js';
    // 设置 script 元素为异步加载
    script.async = true;
    // 设置 Utterances 仓库的 repo 属性
    script.setAttribute('repo', 'jiewong42/utteranc');
    // 设置 issue-term 属性为当前页面的路径名
    script.setAttribute('issue-term', 'pathname');
    // 设置主题为用户的首选颜色方案
    script.setAttribute('theme', 'preferred-color-scheme');
    // 设置跨域属性
    script.crossOrigin = 'anonymous';

    // 获取 id 为 comments 的 DOM 元素
    const scriptParentNode = document.getElementById('comments');
    if (scriptParentNode) {
      // 将 script 元素添加到该 DOM 元素中
      scriptParentNode.appendChild(script);
    }

    // 返回一个清理函数，在组件卸载时移除 script 元素，如果切换页面报错，请删除掉
    return () => {
      if (scriptParentNode) {
        // 从 DOM 中移除 script 元素
        scriptParentNode.removeChild(script);
      }
    };
    
  }, []); // 空依赖数组表示该 effect 只在组件挂载和卸载时运行

  // 返回一个 id 为 comments 的 div 元素
  return <div id="comments"></div>;
};

// 导出 Utterances 组件作为默认导出
export default Utterances;