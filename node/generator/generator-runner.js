module.exports = generator => {
  const it = generator();

  const iterate = val => {
    const x = it.next(val);
    if (x.done) {
      return;
    }

    if (x.value instanceof Promise) {
      x.value.then(result => iterate(result)).catch(err => it.throw(err));
    } else {
      // 非同期の再帰呼び出しのほうが、
      // 同期的な再帰呼出しよりもリソースを早く解放できる
      setTimeout(iterate, 0, x.value);
    }
  };

  iterate();
};
