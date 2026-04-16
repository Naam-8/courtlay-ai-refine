import app from "./app";
import { logger } from "./lib/logger";

const rawPort = process.env["PORT"] ?? "4000";

const port = Number(rawPort);

if (Number.isNaN(port) || port <= 0) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}

const maxPortAttempts = 20;

const listenWithRetry = (candidatePort: number, attemptsLeft: number): void => {
  const server = app.listen(candidatePort, () => {
    logger.info({ port: candidatePort }, "Server listening");
  });

  server.on("error", (err: NodeJS.ErrnoException) => {
    if (err.code === "EADDRINUSE" && attemptsLeft > 0) {
      logger.warn({ port: candidatePort }, "Port in use, trying next port");
      listenWithRetry(candidatePort + 1, attemptsLeft - 1);
      return;
    }

    logger.error({ err, port: candidatePort }, "Error listening on port");
    process.exit(1);
  });
};

listenWithRetry(port, maxPortAttempts);
