# AirStudio

### Project Overview

AirStudio mimics the basic CRUD functionality associated with Airbnb, built with a React frontend and Mongo and Express backend. This was a group project built over 7 days with [Harry Evans](https://github.com/hatch9191) and [Christian Baker](https://github.com/Majoggy). Check out the [deployed app here](https://airstudio-project.netlify.app/). Create an account or use Email: guest<span>@email.com</span> Password: password.

<p align="center">
  <img style="height:400px;width:auto" src="https://res.cloudinary.com/dk0r9bcxy/image/upload/v1633015744/portfolio-website/Screenshot_2021-09-30_at_16.28.16_adbkxe.png" />
</p>

### Technologies Used

#### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON WebToken

#### Frontend

- React
- JavaScript
- HTML5
- SCSS
- Bootstrap
- React Mapbox GL
- React Select
- React Geocode

#### Dev Tools

- npm
- insomnia
- Git
- GitHub
- Netlify
- Heroku

## Planning & Backend Setup

We began the project with an ideation session to discuss potential concepts. Once we decided on an Airbnb clone, we utilised excalidraw to wireframe our frontend design. We then moved on as a group to discuss the backend schemas we would need. We thought carefully through our concept and decided we would definitely need 2 models, Users and Studios. We were unsure whether we would need a third, Bookings. After some trial and error we settled on making it into a nested schema for the Studio model but knew that this would likely cause some issues when retrieving the data in the frontend. We then tested the API responses using insomnia to ensure that our database queries were returning the correct data in the intented format.

## Studio Search Functionality

My first responsibility on the frontend was to allow users to be able to make refined searches on the home page and to then have the relevant response displayed on the studios filter page. This functionality forced me develop my understanding of state and I ended up utilising Route children as `({ location })` to pass state between the components. This approached improved my understadning of Redirect and state. However, since learning React Redux it is clear that Redux would be a better solution for this problem.

```javascript
{
  state ? (
    <Redirect
      push
      to={{
        pathname: "/studios",
        state: {
          continentValue: { continentValue },
          pricingValue: { pricingValue },
          genreValue: { genreValue },
          townValue: { townValue },
          accommodationValue: { accommodationValue },
          studios: { studios },
        },
      }}
    ></Redirect>
  ) : (
    ""
  );
}
```

## Retrieving User Bookings

Having set up the Bookings as a nested Schema within the Studio Schema we knew this would lead to extra work to be done on the frontend to retreive the relevant user bookings. To achieve this I had to filter through all the bookings and find each booking that had a `bookedBy` equal to the `user._id` and then subsequently map through each booking to display it appropriately on the screen. In hindsight it would have been better to represent bookings in a separate schema and avoided this unnessary complication on the frontend.

```javascript
{
  booking.bookings
    .filter((booking) => booking.bookedBy === user._id)
    .map((booked) => (
      <Container key={booked._id}>
        <Row>
          <Col>
            <p>
              {" "}
              <span className='fw-bold'>Booked From:</span> {booked.bookedFrom} <br></br>{" "}
              <span className='fw-bold'> Booked To:</span> {booked.bookedTo}
              <br></br> <span className='fw-bold'> Booking Id:</span>{" "}
              {booked._id}
            </p>
          </Col>
          <Col className='cancel-booking-flexi'>
            <Button
              onClick={() => [
                setModalShow(true),
                setBookingToDelete(booked._id),
              ]}
              className='btn-danger'
            >
              Cancel Booking
            </Button>
          </Col>
        </Row>
        <hr></hr>
      </Container>
    ));
}
```

## Challenges

Correctly setting up booking information in the backend was our biggest challenge. We felt that a virtual field would be the best way with our knowledge to serve up this information but this ultimately led to additional work to be done on the frontend to access the data. You can see the commented out lines where we were having the problems accessing the information we wanted.

```javascript
userSchema
  .virtual("bookedStudio", {
    ref: "Studio",
    localField: "_id",
    foreignField: "bookings.bookedBy",
  })

  .get(function (bookedStudio) {
    if (!bookedStudio) return;
    return bookedStudio.map((studio) => {
      return {
        studioId: studio._id,
        name: studio.name,
        mainImage: studio.mainImage,
        location: {
          town: studio.location.town,
        },
        country: studio.location.country,
        // bookedFrom: studio.bookings.bookedFrom,
        // bookedTo: studio.bookings.bookedTo,
        bookings: studio.bookings,
      };
    });
  });
```

## Potential Improvements

- Using React and Redux to manage state in the application.
- Implementing TypeScript so that we would have a much clearer idea of the types of data flowing throughout the frontend of our application.

## Key Learnings

- My first major learning was the importance of thorough planning before writing any code. By planning out the application in detail it greatly reduced the number of issues we ran into as we had meticulously architected every aspect of the application.
- I also greatly improved my understanding of the concept of state and will be looking to improve that further in coming projects.
