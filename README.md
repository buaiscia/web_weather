
# Weather app

A simple app that show the weather for the desired location.



## Features

- Choose the city to look for
- Fetch the data from openweathermap
- Basic routing
- Redux for global state management
- Styled components
- Typescript

  
## Installation 

The application was made using CRA, instead of NextJS, for more familiarity given the time.
Install the project with npm

- Add your api key in the env.development file (from https://openweathermap.org/price). 
It should look like this:

```bash 
  SKIP_PREFLIGHT_CHECK=true
  REACT_APP_API_KEY=key_here
  REACT_APP_ENDPOINT=https://api.openweathermap.org/data/2.5/weather

```
SKIP_PREFLIGHT_CHECK is inserted for a dependency issue, which could be solved with some more time.


```bash 
  npm install
  npm run start
```

    
## Running Tests

To run tests, run the following command. 

```bash
  npm run test
```

On a note, I just had time to create one small test against a snapshot, but I had some issue with the packages to make it work.
  