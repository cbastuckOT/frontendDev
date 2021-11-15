export async function login(email, password) {
  // MOCK: provide a dummy token
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
  return { token };
}

export async function getAvatar(token) {
  // MOCK: extract a user id from the token and resolve the avatar image
  return new Blob([1, 2, 3, 4, 5, 6, 7, 8, 9], { type: "image/jpeg" });
}

export async function subscribe(source, callback) {
  if (source === "meters") {
    // subscribe to meter data form some backend (C++ engine)
    return mockMeterData({ numMeters: 50, fps: 12, stepWidth: 0.1 }, callback);
  } else {
    console.error("Unkown subscription source", source);
  }
}

// ---- MOCK subscribed data from backend ----

function mockMeterData({ numMeters, fps, stepWidth }, callback) {
  let phase = 0;
  return setInterval(() => {
    const meters = generateSinusMeters(numMeters, phase, stepWidth);
    phase += stepWidth * meters.length;
    callback({ meters });
  }, 1000 / fps);
}

// generate fake meter values
function generateSinusMeters(numMeters, offset, stepWidth) {
  const meters = new Array(numMeters).fill(0).map((_, i) => i);
  return meters.map((idx) => norm(Math.sin(offset + stepWidth * idx)));
}

// helper: scale from [-1;1] to [0;1]
function norm(x) {
  return (x + 1) * 0.5;
}
