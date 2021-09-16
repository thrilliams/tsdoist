<p align="center">
    <h1 align="center">TSdoist</h1>
</p>
<p align="center">
<a href="https://github.com/thrilliams"><img src="https://img.shields.io/badge/created%20by-@thrilliams-purple" alt="Author"></a>
<a href="https://github.com/thrilliams/tsdoist/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/thrilliams/tsdoist"></a>
</p>
<p align="center">
a simple wrapper for the typescript api.
</p>
<p align="center">
powered by <a href="https://github.com/colinhacks/zod">Zod</a>!
</p>

```JavaScript
import { Todoist } from 'tsdoist';

let td = new Todoist('0123456789abcdef0123456789abcdef01234567');

td.getTasks().then(console.log);
```

### Notes and warnings
- Zod and TypeScript are unable to correctly deal with strict union arguments, so `createTask`, `updateTask`, and most of the `Comment`-related functions will not throw a compile-time error when you pass too many of a set of arguments (see [here](https://developer.todoist.com/rest/v1/#create-a-new-task), [here](https://developer.todoist.com/rest/v1/#update-a-task), and [here](https://developer.todoist.com/rest/v1/#comments) for more info).
- Files are not currently supported, and the `attachment` field is currently missing from the `Comment` type and from the `createComment` options.

### Roadmap
- [X] [REST API](https://developer.todoist.com/rest/v1/#overview)
- [ ] [OAuth2 Helper](https://developer.todoist.com/guides/#authorization)
- [ ] [File API](https://developer.todoist.com/sync/v8/#uploads)
- [ ] [Sync API](https://developer.todoist.com/sync/v8/#overview)
