# afreecatv api

아프리카TV 공식 API 의 데이터 타입/클래스를 지원하고, 호출 후 반환까지 수행합니다.

```shell
npm i @afreecatv/api
yarn add @afreecatv/api
pnpm add @afreecatv/api
```

# 사용 방법
```ts
import { api, ISuggestBj } from "@afreecatv/api";
const response = await api().etc.searchHistory(search);
return response.suggest_bj // Array<ISuggestBj> 
```
