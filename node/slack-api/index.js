const { RtmClient, CLIENT_EVENTS, RTM_EVENTS } = require("@slack/client");

const token = "<TOKEN>";
const appData = {};

async function main() {
  const rtm = new RtmClient(token, {
    dataStore: false,
    useRtmConnect: true
  });

  rtm.on(CLIENT_EVENTS.RTM.AUTHENTICATED, connectData => {
    appData.selfId = connectData.self.id;
    console.log(
      `Logged in as ${appData.selfId} of team ${connectData.team.id}`
    );
  });

  rtm.on(CLIENT_EVENTS.RTM.RTM_CONNECTION_OPENED, async () => {
    console.log(`Ready`);

    await rtm.sendMessage("API Clientからテスト", "<CHANNEL_ID>");
  });
  rtm.on(RTM_EVENTS.MESSAGE, msg => {
    console.log(`Message: ${JSON.stringify(msg, null, 2)}`);
  });

  rtm.start();
}

main().catch(console.error);
