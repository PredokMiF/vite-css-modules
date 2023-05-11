# vite-css-modules

Проблема: я хочу чтоб можно было нормально импортить простые css/sass стили, а также css/sass-модули.

К css-модулям нужно обращаться при помощи структуры вида `style.someStyle` и чтоб TS подсвечивал каких стилей нет, а какие есть (typesafe styles).

Выход вижу в генерации `*.d.ts` файлов для css-модулей.

При обычном подходе просто прописывают такой тайпдефинишен:
```ts
// CSS-модули
declare module '*.module.css' {
  const classes: { [key: string]: string }
  export default classes
}
declare module '*.module.scss' {
    const classes: { [key: string]: string }
    export default classes
}
declare module '*.module.sass' {
    const classes: { [key: string]: string }
    export default classes
}

// Простые стилевый файлы
declare module '*.css' {
    /**
     * @deprecated Use `import style from './style.css?inline'` instead.
     */
    const css: string
    export default css
}
declare module '*.scss' {
    /**
     * @deprecated Use `import style from './style.scss?inline'` instead.
     */
    const css: string
    export default css
}
declare module '*.sass' {
    /**
     * @deprecated Use `import style from './style.sass?inline'` instead.
     */
    const css: string
    export default css
}
```

Но есть правила тайпскрипта:
```json
{
  "noPropertyAccessFromIndexSignature": true,
  "noUncheckedIndexedAccess": true
}
```

Первое правило говорит, что при наличии в интерфейсе объявления `{ [key: string]: string }` к полям можно обращаться только через квадратные скобки `style['someStyle']`, а я хочу обращаться только через точку.

Плюс в тачанку следующее правило, которое заставляет добавлять `undefined` при обращении к полям через квадратные скобки.
