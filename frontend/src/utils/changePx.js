const changePx = {};

for (let i = 0; i <= 300; i++) {
  if (i % 2 === 0) {
    changePx[i] = `${i}px`;
  }
}

export { changePx };
