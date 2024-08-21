import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InviteGuestsModal } from './invite-guests-modal'
import { ConfirmTripModal } from './confirm-trip-modal'
import { DestinationAndDateStep } from './steps/destination-and-date-step'
import { InviteGuestsStep } from './steps/invite-guests-step'
import { DateRange } from 'react-day-picker'
import { api } from '../../lib/axios'

export function CreateTripPage() {
    const navigate = useNavigate()

    const [isGuestInputOpen, setIsGuestInputOpen] = useState(false)
    const [isGuestModalOpen, setIsGuestModalOpen] = useState(false)
    const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false)

    const [destination, setDestination] = useState('')
    const [ownerName, setOwnerName] = useState('')
    const [ownerEmail, setOwnerEmail] = useState('')
    const [eventIsStartAndEndDates, setEventIsStartAndEndDates] = useState<DateRange | undefined>()
    const [emailsToInvite, setEmailsToInvite] = useState<string[]>([])

    function openGuestInput() {
        setIsGuestInputOpen(true)
    }

    function closeGuestInput() {
        setIsGuestInputOpen(false)
    }

    function openGuestsModal() {
        setIsGuestModalOpen(true)
    }

    function closeGuestsModal() {
        setIsGuestModalOpen(false)
    }

    function openConfirmTripModal() {
        setIsConfirmTripModalOpen(true)
    }

    function closeConfirmTripModal() {
        setIsConfirmTripModalOpen(false)
    }

    function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const data = new FormData(event.currentTarget)
        const email = data.get('email')?.toString()

        if (!email) {
            return
        }

        if (emailsToInvite.includes(email)) {
            return
        }


        setEmailsToInvite([
            ...emailsToInvite,
            email
        ])
        event.currentTarget.reset()
    }

    function removeEmailsToInvite(emailToRemove: string) {
        const newEmailList = emailsToInvite.filter(email => email !== emailToRemove)

        setEmailsToInvite(newEmailList)
    }

    async function createTrip(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        console.log(destination)
        console.log(eventIsStartAndEndDates)
        console.log(emailsToInvite)
        console.log(ownerName)
        console.log(ownerEmail)

        if (!destination) {
            return
        }

        if (!eventIsStartAndEndDates?.from || !eventIsStartAndEndDates?.to) {
            return
        }

        if (!ownerName || !ownerEmail) {
            return
        }

        const response = await api.post('/trips', {
            destination,
            starts_at: eventIsStartAndEndDates?.from,
            ends_at: eventIsStartAndEndDates?.to,
            emails_to_invite: emailsToInvite,
            owner_name: ownerName,
            owner_email: ownerEmail
        })

        const { tripId } = response.data

        console.log(tripId)

        navigate(`/trips/${tripId}`)
    }

    return (
        <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
            <div className="max-w-3xl w-full px-6 text-center space-y-10">
                <div className='flex flex-col items-center gap-3'>
                    <img src="/logo.svg" alt="plann.er-logo" />
                    <p className="text-zinc-300 text-lg">
                        Convide seus amigos e planeje sua próxima viagem!
                    </p>
                </div>

                <div className='space-y-4'>
                    <DestinationAndDateStep isGuestInputOpen={isGuestInputOpen} closeGuestInput={closeGuestInput} openGuestInput={openGuestInput} setDestination={setDestination} setEventIsStartAndEndDates={setEventIsStartAndEndDates} eventIsStartAndEndDates={eventIsStartAndEndDates} />

                    {isGuestInputOpen && (
                        <InviteGuestsStep openGuestsModal={openGuestsModal} emailsToInvite={emailsToInvite} openConfirmTripModal={openConfirmTripModal} />
                    )}
                </div>

                <p className="text-sm text-zinc-500">
                    Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
                    com nossos <a className="text-zinc-300 underline" href="#">termos de uso</a> e <a className="text-zinc-300 underline" href="#">políticas de privacidade</a>.
                </p>
            </div>

            {isGuestModalOpen && (
                <InviteGuestsModal closeGuestsModal={closeGuestsModal} emailsToInvite={emailsToInvite} addNewEmailToInvite={addNewEmailToInvite} removeEmailsToInvite={removeEmailsToInvite} />
            )}

            {isConfirmTripModalOpen && (
                <ConfirmTripModal closeConfirmTripModal={closeConfirmTripModal} createTrip={createTrip} setOwnerName={setOwnerName} setOwnerEmail={setOwnerEmail} />
            )}

        </div>
    )
}


