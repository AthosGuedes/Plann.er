import { CheckCircle2, CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/button";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";

interface GuestsProps {
    openConfirmGuestModal: () => void
}

interface Participants {
    id: string
    name: string | null
    email: string
    is_confirmed: boolean
}


export function Guests({ openConfirmGuestModal }: GuestsProps) {
    const { tripId } = useParams()
    const [participants, setParticipants] = useState<Participants[]>([])

    useEffect(() => {
        api.get(`/trips/${tripId}/participants`).then(reponse => setParticipants(reponse.data.participants))
    }, [tripId])

    return (
        <div className="space-y-6">
            <h2 className="font-semibold text-xl">Convidados</h2>
            <div className="space-y-5">
                {participants.map((participants, index) => {
                    return (
                        <div key={participants.id} className="flex items-center justify-between gab-4">
                            <div className="space-y-1.5">
                                <span className="block font-medium text-zinc-100 ">{participants.name ?? `Convidado ${index}`}</span>
                                <span className="block text-sm text-zinc-400 truncate ">{participants.email}</span>                          
                            </div>
                            {participants.is_confirmed ? (
                                <CheckCircle2 className="size-5 text-lime-300 shrink-0" />
                            ) : (
                                <CircleDashed className="size-5 text-zinc-400 shrink-0" />
                            )}
                        </div>
                    )
                })}
            </div>
            <Button onClick={openConfirmGuestModal} variant="secondary" size="full">
                <UserCog className='size-5' />
                Gerenciar convidados
            </Button>
        </div>
    )
}