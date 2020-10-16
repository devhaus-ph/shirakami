# Shirakami

Shirakami is a minimalist CSS framework. Set of fast and clean [react](https://reactjs.org/) components.

## Install

```bash
npm install shirakami-ui
```

## Usage

```javascript
// index.js

import 'shirakami-ui/dist/shirakami.css'
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(<App />, document.getElementById('root'))
```

```javascript
//app.js

import React from 'react'
import { Button } from 'shirakami-ui'

function App() {
  return <Button>Simple</Button>
}

export default App
```

## License

Code released under [MIT](https://github.com/devhaus-ph/shirakami/blob/master/LICENSE) license.
