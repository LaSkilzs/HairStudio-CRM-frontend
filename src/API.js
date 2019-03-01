class API {
  static login(user) {
    console.log(user);
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  }

  static register(user) {
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  }

  static createProfile(profile) {
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(profile)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  }

  static sendMessage(message) {
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(message)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  }

  static createHairCard(haircard) {
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(haircard)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  }

  static scheduleAppointment(appointment) {
    fetch("http://localhost:3000/api/v1/appointments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(appointment)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  }
  // updates / edits
  static updateAppointment(appointment) {
    fetch(`http://localhost:3000/api/v1/appointments/${appointment.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(appointment)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  }

  static updateProfile(profile) {
    fetch(`http://localhost:3000/api/v1/users/${profile.user_id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(profile)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  }

  static updateHaircard(haircard) {
    fetch(`http://localhost:3000/api/v1/appointments/${haircard.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(haircard)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  }

  // delete
  static deleteAppointment(appointment) {
    fetch(`http://localhost:3000/api/v1/appointments/${appointment.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(appointment)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  }

  static deleteProfile(profile) {
    fetch(`http://localhost:3000/api/v1/users/${profile.user_id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(profile)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  }

  static deleteHaircard(haircard) {
    fetch(`http://localhost:3000/api/v1/appointments/${haircard.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(haircard)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  }
}

export default API;
