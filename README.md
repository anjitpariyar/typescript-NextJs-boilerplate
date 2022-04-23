## ts next js starter

### How to start

- clone this repo

  install all dep `yarn `

  run it `yarn dev`

-

## after that

- change background color from `styled\Global.styled.ts`

  ```
  body{
    background-color: #000;
    color: #FFFFFF;
  }
  ```

- Add your theme color here `styled\Theme.ts`

### this may help

coding style

```
for the react component, use regular function(not arrow function)
//bad
const Home = ()=> {
    return <p>its hoem</p>
}

//good
export default function const Home(){
    return <p>its hoem</p>
}




and for the real function(not related with react compoennt,) use arrow function
//bad
funtion sumNumber(a,b){
    return a+b
}

//good
const sumNumber = (a,b)=> {
    return a+b
}

---------

we are using on typescript with baseUrl,
so we dont need to drilling import module, we can access it from the baseUrl

//bad
import { Container } from "../../styles/layout";

//good
import { Container } from "styles/layout";

```

- Node js (v.16 + )
- Typescript
- React
- Nextjs
- yarn

run dev

- yarn dev

#### for css writing

-> Styled component
-> styled system

#### for api call

-> SWR

#### for clean code & code style

-> atomic design
https://bradfrost.com/blog/post/atomic-web-design/

-> pure function
https://www.geeksforgeeks.org/pure-functions-in-javascript/

-> custom hooks
https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889
https://github.com/rehooks/awesome-react-hooks

-> function component > class component

#### for design pattern

example:

- pages/home.tsx
- component/
  --components/home/Title.tsx
  --components/home/Message.tsx
  --components/home/utils.ts
  --components/home/atom.ts
