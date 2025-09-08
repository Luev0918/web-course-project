import { defineConfig, transformerDirectives} from 'unocss'
import presetUno from '@unocss/preset-uno';
import presetTheme from "unocss-preset-theme";
import type { Theme } from "unocss/preset-uno";
import { myTheme} from './uno.theme';

export default defineConfig({
  variants: [],
  shortcuts: [
     {
      btn: 'py-2 px-4 font-semibold rounded-lg shadow-md cursor-pointer',
    },
    // 动态快捷方式
    [/^btn-(.*)$/, ([, c]) => `bg-${c} text-#fff hover:bg-${c}/80 py-2 px-4 font-semibold rounded-lg shadow-md cursor-pointer`],
    // 使用主题
    [
      /^mybd-(.*)$/,
      ([, c], { theme }) => {
        return `b-1 b-${c} b-dashed`;
      },
    ],
  ],
  rules: [
    // 注意：属性语法遵循 CSS 属性语法，例如 font-weight 而不是 fontWeight。如果属性名中有连字符 -，应该用引号括起来。
        ['font-bold', { 'font-weight': 700 }],
        [/^bd-(\d+)$/, ([, d]) => ({ border: `${d}px solid #ddd` })],
        [/^p-(\d+)$/, (match) => ({ padding: `${match[1]}px` })]
  ],
  transformers: [
     transformerDirectives(),
  ],
  presets: [
    presetUno(),
    // ...
    presetTheme<Theme>({
      theme: myTheme,
    }),
  ],

  theme:{
    colors: {
      default: {
        primary: "#1fa1fb",
        warning: "#eba049",
        danger: "#fb696e",
        info: "#909399",
      },
    peaple: {
    colors: {
      primary: "#987D9A",
      warning: "#BB9AB1",
      danger: "#EECEB9",
      info: "#FEFBD8",
    },
  
  },
  spring: {
    colors: {
      primary: "#D8EFD3",
      warning: "#95D2B3",
      danger: "#55AD9B",
      info: "#F1F8E8",
    },
  },
}
  }
  })