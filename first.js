if (!global._babelPolyfill) {
  require("babel-polyfill");
}

export const hello = async (event, context, cb) => {
  const p = () =>
    new Promise((resolve, reject) => {
      resolve("success");
    });

  try {
    const r = await p();
    return cb(null, {
      message: `${r} Go Serverless Webpack (Babel) v1.0! Este es el primer modulo`,
      event
    });
  } catch (e) {
    console.log(e);
    return cb(null, e);
  }
};
