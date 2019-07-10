const graph = require("@microsoft/microsoft-graph-client");

module.exports = {
  async getUserDetails(accessToken) {
    const client = createClient(accessToken);

    const user = await client.api("/me").get();
    return user;
  },

  async getEvents(accessToken) {
    const client = createClient(accessToken);

    const events = await client
      .api("/me/events")
      .select("subject,organizer,start,end,location")
      .orderby("createdDateTime DESC")
      .get();

    return events;
  }
};

function createClient(accessToken) {
  return graph.Client.init({
    authProvider: done => done(null, accessToken)
  });
}
