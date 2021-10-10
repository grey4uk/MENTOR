export { default } from './Form';

// ---index.js---
// export { default } from './ListItem'; (це якщо створений компонент експортується по дефолту)
// або
// export * as List from './List'; (якщо використовуєм іменований експорт)
// але використання виглядатиме так:
// --App.js--
// import { List } from './components/List';
// ...
// <List.List list={list} /> (edited)
