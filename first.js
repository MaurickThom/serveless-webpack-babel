if (!global._babelPolyfill) {
  require("babel-polyfill");
}

const p = () =>
  new Promise((resolve, reject) => {
    resolve("Success!!!");
  });

export const hello = async event => {
  try {
    const response = await p();
    return {
      message: `Finish with: ${response}`
    };
  } catch (e) {
    return e;
  }
};
