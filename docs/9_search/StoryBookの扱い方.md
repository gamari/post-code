

[参考](https://qiita.com/suzu1997/items/2afcfc2d13f4bdd12841)

- 


## App Routerのエラー回避

```js
export default {
  title: 'Components/CodeCard',
  component: CodeCard,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};
```

- metaを修正する