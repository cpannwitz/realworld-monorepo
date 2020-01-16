# realworld-monorepo
Example monorepo with 3 packages, consisting of
[Create-React-App](https://create-react-app.dev/), [NestJS](https://nestjs.com/) and shared code.

Goal is to create an PoC which covers the basic and useful usage patterns of monorepos, ie.
- CI
- Hot Reload
- Deployment


## Credits & Thanks to:
- https://github.com/labs42io/circleci-monorepo
- https://github.com/iynere/compare-url-orb

## Todo
- create dependency list for dependent packages (maybe even automatic detection via package.json?)
- extract shell script from config again? -> Problem: missing env vars

## How to:
- Configure packages, paths etc. like mentioned [here](https://github.com/labs42io/circleci-monorepo)
- "CIRCLE_TOKEN": Get one [here](https://circleci.com/account/api) and set it up in the specific project settings
- win.
