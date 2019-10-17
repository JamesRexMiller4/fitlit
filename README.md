# FitLIT

## Description
FitLIT is an activity dashboard web app that displays a user profile, and presents information from datasets of hydration, sleep, and
activity data entries (very much analagous to a FitBit, hence the name).

This paired project's learning objectives were to implement TDD in the construction of our object classes and manipulating 
multiple datasets. We worked with the Mocha and Chai testing framework running on Node.js. Working with multiple datasets, this project exercises fundamentals of Object Oriented Programming: SRP and Encapsulation, ratcheting up the complexities of coupled objects that rely on data from each other. Additionally, it was the first project that was provided without a comp, so UX/UI was our interpretation of how we would execute an app of this kind. 


## Data Model 

With 4 datasets to pull from we decided to create our class structure with 8 main classes in the spirit of SRP. Each dataset has
a respective repository which is then able to pass on information of a particular user, to another user class for each dataset.

Here is the general lay out of each dataset 


**Users**

```
[
  {
    "id": [number],
    "name": [string],
    "address": [string],
    "email": [string],
    "strideLength": [number - feet],
    "dailyStepGoal": [number - steps],
    "friends": [array - one-way connection to other user(s)]
  },
  ...more user data
]
```

**Activity**

```
[
  {
    "userID": [number],
    "date": [string YYYY/MM/DD],
    "numSteps": [number - steps],
    "minutesActive": [number - minutes],
    "flightsOfStairs": [number - flights]
  },
  ...more activity data
]
```

**Hydration**

```
[
  {
    "userID": [number],
    "date": [string YYYY/MM/DD],
    "numOunces": [number - ounces]
  },
  ...more hydration data
]
```

**Sleep**

```
[
  {
    "userID": [number],
    "date": [string YYYY/MM/DD],
    "hoursSlept": [number - hours],
    "sleepQuality": [number - unitless]
  },
  ...more sleep data
]
```


## Class Structure 

As mentioned earlier we went with 8 object classes to handle and manipulate the dataset we were working with. 4 of the datasets are representations of the datasets themselves and had methods of their own that would gather averages of all users, to be displayed in
our other users section of the dashboard. The other 4 object classes were meant to display and manipulate the data of a particular user. 

Here is one such example: 

```
class Hydro {
  constructor(data) {
    this.data = data
  }

  findAvgFluidOunces() {
    let avg = this.data.reduce((acc, day) => {
      acc += day.numOunces
      return acc
    }, 0)
    return Math.round(avg / this.data.length)
  }

  findFluidDate(date) {
    let day = this.data.find(element => element.date === date)
    return day.numOunces
  }

  findFluidWeek(date) {
    let index = this.data.findIndex(element => element.date === date)
    let week = this.data.slice(index, (index + 7))
    return week.map(day => {
      return day.numOunces
    });
  }
}
if (typeof module !== 'undefined'){
module.exports = Hydro;
}
```




## Dashboard UX / UI 

We used CSS grid to display each data set as its own section/column. For the information that spans a week we utilized the 
charts.js framework to add some data visualization to the data. We went with a blue themed background with a white foreground to 
convey a sense of healthiness and fitness. We have the site preloaded to load the last day of the datasets, but provide the option for
users to change the date using a jquery datepicker widget. Overall, I believe we have a straightforward dashboard that presents all
the information neatly and beautifully.

![fitLit-dashboard](https://user-images.githubusercontent.com/27719824/66975746-b40e3c00-f05c-11e9-9d21-dbce2370ac86.png)



Using the datepicker, the dashboard and charts update to reflect the new data from that time period.

![2019-10-16 21 35 32](https://user-images.githubusercontent.com/27719824/66975843-fe8fb880-f05c-11e9-8467-671654a3d797.gif)
