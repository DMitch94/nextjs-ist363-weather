const people = [
  {
    name: { first: "Ava", last: "Smith" },
    jobTitle: "Software Engineer",
    company: "InnoTech",
    slug: "ava-smith",
  },
  {
    name: { first: "Liam", last: "Johnson" },
    jobTitle: "Product Manager",
    company: "InnoTech",
    slug: "liam-johnson",
  },
  {
    name: { first: "Olivia", last: "Williams" },
    jobTitle: "UX Designer",
    company: "InnoTech",
    slug: "olivia-williams",
  },
  {
    name: { first: "Noah", last: "Brown" },
    jobTitle: "Data Scientist",
    company: "InnoTech",
    slug: "noah-brown",
  },
  {
    name: { first: "Emma", last: "Jones" },
    jobTitle: "Cloud Solutions Architect",
    company: "InnoTech",
    slug: "emma-jones",
  },
  {
    name: { first: "Oliver", last: "Garcia" },
    jobTitle: "DevOps Engineer",
    company: "InnoTech",
    slug: "oliver-garcia",
  },
  {
    name: { first: "Sophia", last: "Miller" },
    jobTitle: "Cybersecurity Specialist",
    company: "InnoTech",
    slug: "sophia-miller",
  },
  {
    name: { first: "Isabella", last: "Davis" },
    jobTitle: "Network Administrator",
    company: "InnoTech",
    slug: "isabella-davis",
  },
  {
    name: { first: "Mason", last: "Rodriguez" },
    jobTitle: "IT Support Technician",
    company: "InnoTech",
    slug: "mason-rodriguez",
  },
  {
    name: { first: "Mia", last: "Martinez" },
    jobTitle: "Frontend Developer",
    company: "InnoTech",
    slug: "mia-martinez",
  },
];

export function getPeople() {
  return people;
}

export async function getWeatherData() {
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/forecast?zip=13244&appid=5dd41d7c2de049d09e8a9b1a132965b9&units=imperial"
  );
  const data = await response.json();
  return data;
}

export const getGeoLocation = () => {
  //state: pending, resolved, rejected
  // two arguments: resolve and reject
  return new Promise((resolve, reject) => {
    //if pizza is ready
    if ("geolocation" in navigator) {
      //resolve();
      // two functions are needed: success and error
      //success function and error function
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve(position);
        },
        () => {
          reject("Geolocation has been denied!");
        }
      );
    } else {
      //if pizza is not ready
      reject("Geolocation is not available in your browser");
    }
  });
};

// order the pizza
export const getGeolocation = () => {
  // handle whether the pizza is ready or not
  // A promise expects two arguments: resolve and reject, which are functions that you call to fulfill or reject the promise.
  return new Promise((resolve, reject) => {
    // if the pizza is ready, resolve the promise
    if ("geolocation" in navigator) {
      // Yes, the browser supports geolocation! Keep going!
      // it needs two functions: success and error
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve(position);
        },
        () => {
          reject("User denied geolocation");
        }
      );
    } else {
      // if the pizza is not ready, reject the promise
      reject("Geolocation is not available in your browser");
    }
  });
};
