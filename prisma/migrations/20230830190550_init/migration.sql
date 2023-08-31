-- CreateTable
CREATE TABLE "Provitional_Token" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "token" TEXT NOT NULL,
    "created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiration" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Provitional_Token_token_key" ON "Provitional_Token"("token");
