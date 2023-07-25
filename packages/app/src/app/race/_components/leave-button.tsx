'use client'
import { useState } from 'react';
import { RaceParticipant } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";

async function leaveRace(participantId: RaceParticipant["id"]) {
  /*await prisma.raceParticipant.delete({
    where: {
      id: participantId,
    },
  });*/
}

export default function LeaveButton({ participantId }: { participantId: RaceParticipant["id"] }) {
  const [hasLeft, setHasLeft] = useState(false);

  async function handleLeave() {
    if (window.confirm("Are you sure you want to leave?")) {
        await leaveRace(participantId);
        setHasLeft(true);
    }
  }

  if (hasLeft) {
    window.location.href = "/race"; // Redirect the user
  }

  return (
    <Button onClick={handleLeave} className="mt-4 px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700">
      Leave
    </Button>
  );
}
