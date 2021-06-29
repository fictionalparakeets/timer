let times = process.argv.slice(2);
times.sort();

times.forEach(num => {
  const nummyNum = Number(num);
  if (nummyNum >= 1 && nummyNum < Number.MAX_SAFE_INTEGER) {
    setTimeout(() => {
      process.stdout.write('\x07');
      console.log('heres one');
    }, nummyNum * 100);
  }
});
