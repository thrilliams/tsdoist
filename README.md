<p align="center">
    <h1 align="center">TSdoist</h1>
</p>
<p align="center">
<a href="https://github.com/thrilliams"><img src="https://img.shields.io/badge/created%20by-@thrilliams-purple" alt="Author"></a>
<a href="https://github.com/thrilliams/tsdoist/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/thrilliams/tsdoist"></a>
</p>
<p align="center">
powered by <a href="https://github.com/colinhacks/zod">Zod</a>!
</p>

```JavaScript
import { Todoist } from 'tsdoist';

let td = new Todoist('0123456789abcdef0123456789abcdef01234567');

td.getTasks().then(console.log);
```