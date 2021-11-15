export default async function dispatch(api, { action, ...params }) {
  console.log("Dispatching action", action, params);
  switch (action) {
    case "login":
      const { token } = await api.login(params);
      const avatarImage = await api.getAvatar(token);
      return { user: { token, username: params.username }, avatarImage };
    default:
      console.error("Unknown action", action);
  }
}
