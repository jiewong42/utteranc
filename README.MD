utteranc[^1] 是一个基于 GitHub Issues 构建的轻量级评论小部件。将 GitHub Issues 用于博客评论
- 开源。🙌
- 无追踪，无广告，永远免费。📡🚫
- 无锁定。所有数据存储在 GitHub 问题中。🔓
- 使用 Primer 进行样式设置，Primer 是为 GitHub 提供动力的 CSS 工具包。💅
- 暗黑主题。🌘
- 轻量级。纯 Vanilla TypeScript。对于常绿浏览器，无需下载字体、JavaScript 框架或填充。🐦🌲

我用 utteranc 构建了我的个人博客[^2]的评论界面，我的博客是用 gatsbyjs[^3] 构建的，它是一个基于 React 的开源框架，用来构建快速、安全且功能强大的网站。

这段代码用来展示我是如何把 utteranc 嵌入我的博客的。

在文件 Utterances.tsx 中，需要更改 repo 为你自己的仓库。随后，可以在博客页面中导入这个组件并使用。
```tsx
import React, { useEffect } from 'react';

const Utterances: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://utteranc.es/client.js';
    script.async = true;
    script.setAttribute('repo', 'jiewong42/utteranc');
    script.setAttribute('issue-term', 'pathname');
    script.setAttribute('theme', 'preferred-color-scheme');
    script.crossOrigin = 'anonymous';

    const scriptParentNode = document.getElementById('comments');
    if (scriptParentNode) {
      scriptParentNode.appendChild(script);
    }

    return () => {
      if (scriptParentNode) {
        scriptParentNode.removeChild(script);
      }
    };
  }, []);

  return <div id="comments"></div>;
};

export default Utterances;
```
具体而言，在 post.tsx 文件中，使用 import 导入组件，再用``` <Utterances />``` 使用

```tsx

import Utterances from './Utterances';

<Utterances />
```
[^1]:https://utteranc.es/
[^2]:https://jiewong.com
[^3]:https://www.gatsbyjs.com/