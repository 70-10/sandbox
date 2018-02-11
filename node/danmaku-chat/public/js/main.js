$(() => {
  $("input#name").val(localStorage.name);
  const danmaku = new Danmaku();
  danmaku.init({
    container: document.getElementById("danmaku"),
  });
  const socket = io();
  $("form").submit(() => {
    const name = $("input#name").val();

    if (name && name !== localStorage.name) {
      localStorage.name = name;
    }

    const message = name ? `${$("#m").val()}@${name}` : $("#m").val();
    socket.emit("chat message", { type: "browser", message });
    $("#m").val("");
    return false;
  });

  socket.on("chat message", msg => {
    danmaku.emit({
      text: msg,
      style: {
        fontSize: "25px",
        color: "#fff",
      },
    });
  });

  socket.on("count", count => {
    $("#count").text(count.viewer);
    $("#all-count").text(count.all);
    $("#comment-count").text(count.comment);
  });

  $("button.emoji").on("click", function() {
    socket.emit("chat message", { type: "browser", message: $(this).text() });
  });
});
