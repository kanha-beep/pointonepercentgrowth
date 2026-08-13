import { createServer } from "vite";
import react from "@vitejs/plugin-react";

const host = process.env.HOST || "127.0.0.1";
const port = Number(process.env.PORT || 5173);

const server = await createServer({
  configFile: false,
  plugins: [react()],
  cacheDir: "C:/tmp/apniwebsite-vite-cache",
  server: {
    host,
    port
  }
});

await server.listen();
server.printUrls();
await new Promise(() => {});
