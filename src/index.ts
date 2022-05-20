import { Compiler } from "webpack";
import { ProvidePlugin } from "webpack";

export class NodePolyfillPlugin {
  apply(compiler: InstanceType<typeof Compiler>): void {
    compiler.options.resolve.fallback = {
      path: "path-browserify",
      fs: "browserify-fs",
      stream: "stream-browserify",
      constants: "constants-browserify",
      buffer: "buffer",
      os: "os-browserify/browser",
      crypto: "crypto-browserify",
      process: "process/browser",
      https: "https-browserify",
      http: "stream-http",
      assert: "assert",
      console: "console-browserify",
      domain: "domain-browser",
      events: "events",
      punycode: "punycode",
      querystring: "querystring-es3",
      vm: "vm-browserify",
      url: "url",
      util: "util",
      sys: "util",
      timers: "timers-browserify",
      tty: "tty-browserify",
      zlib: "browserify-zlib",
      _stream_duplex: "readable-stream/duplex",
      _stream_passthrough: "readable-stream/passthrough",
      _stream_readable: "readable-stream/readable",
      _stream_transform: "readable-stream/transform",
      _stream_writable: "readable-stream/writable",
      string_decoder: "string_decoder",
      ...compiler.options.resolve.fallback,
    };
    compiler.options.plugins.push(
      new ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
        process: "process/browser",
      })
    );
  }
}
