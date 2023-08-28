-- CreateTable
CREATE TABLE "TrackingPlan" (
    "trackingId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TrackingPlan_pkey" PRIMARY KEY ("trackingId")
);

-- CreateTable
CREATE TABLE "Events" (
    "eventId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "rules" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Events_pkey" PRIMARY KEY ("eventId")
);

-- CreateIndex
CREATE UNIQUE INDEX "TrackingPlan_name_key" ON "TrackingPlan"("name");

-- AddForeignKey
ALTER TABLE "Events" ADD CONSTRAINT "Events_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "TrackingPlan"("trackingId") ON DELETE RESTRICT ON UPDATE CASCADE;
