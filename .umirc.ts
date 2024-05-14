import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/analysis/index',
    },
    {
      name: '我的数据',
      path: '/data',
      component: './MyData',
    },
    {
      name: '数据处理',
      path: '/dataprocessing',
      component: './Dataprocessing',
    },
    {
      name: '数据分析',
      path: '/analysis',
      component: './Analysis/layout.tsx',
      routes: [
        { path: '/analysis', redirect: '/analysis/index' },
        {
          path: 'index',
          component: './Analysis/index.tsx',
        },
        {
          path: '',
          component: './Analysis/ChildrenLayout',
          routes: [
            { path: '', redirect: 'operation/:id' },
            {
              path: 'operation/:id',
              component: './Analysis/Operation',
            },
            { path: 'result/:id', component: './Analysis/Result' },
          ],
        },
      ],
    },
    {
      name: 'PRO绘图',
      path: '/pro-draw',
      component: './Prodraw',
    },
    {
      name: '专项分析',
      path: '/pro-analysis',
      component: './ProAnalysis',
    },
    {
      name: '流式建模',
      path: '/pro-model',
      component: './ProModel',
    },
    {
      name: 'PRO大屏',
      path: '/dashboards',
      component: './Dashboards',
    },
  ],

  npmClient: 'pnpm',
  tailwindcss: {},
});
