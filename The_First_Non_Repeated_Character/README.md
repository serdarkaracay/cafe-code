# In one string, non-repeat first character.
> Write a function that returns the first non-repeating character of a string. ie. "aaaaaabbbsasdweqwe" -> "d"

Working version fiddle at https://jsfiddle.net/serdarkaracay/fztyh8cg/! 🎉

I used those library `mocha` and `chai`.
VS Code debug launch mode configuration added.

## Test Mocha Options
```bash
$ ./node_modules/mocha/bin/mocha firstNonRepeated.js
# or
$ npm test
```

## VS Code launch.json
```json
                "type": "node",
                "request": "launch",
                "name": "Mocha Tests",
                "program": "${workspaceFolder}/The_First_Non_Repeated_Character/node_modules/mocha/bin/_mocha",
                "args": [
                  "-u",
                  "bdd",
                  "--timeout",
                  "999999",
                  "--colors",
                  "${workspaceFolder}/The_First_Non_Repeated_Character/firstNonRepeated.js"
                ],
                "internalConsoleOptions": "openOnSessionStart"
```
