import { config } from "../Config";

export function Request(path) {
  this.path = `${config.baseUrl}/api/auth/${path}`;
}

Request.prototype.getMessage = async function (obj) {
  const config = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj),
  };

  try {
    const request = await fetch(this.path, config);
    const response = await request.json();
    console.log(request);
    console.log(response);
    if (request.status !== 200) {
      return {
        status: false,
        ...response,
      };
    }
    return {
      status: true,
      ...response,
    };
  } catch (error) {
    return {
      status: false,
      error,
    };
  }
};
