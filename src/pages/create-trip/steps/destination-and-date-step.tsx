import { ArrowRight, Calendar, MapPin, Settings2, X } from "lucide-react";
import { Button } from "../../../components/button";
import { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import { format } from 'date-fns'
import "react-day-picker/style.css";


interface DestinationAndDateStepProps {
    isGuestInputOpen: boolean
    closeGuestInput: () => void
    openGuestInput: () => void
}

export function DestinationAndDateStep({ isGuestInputOpen, closeGuestInput, openGuestInput }: DestinationAndDateStepProps) {
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)
    const [eventIsStartAndEndDates, setEventIsStartAndEndDates] = useState<DateRange | undefined>()

    function openDataPicker() {
        return setIsDatePickerOpen(true)
    }
    
    function closeDataPicker() {
        return setIsDatePickerOpen(false)
    }

    const displayedDate = eventIsStartAndEndDates && eventIsStartAndEndDates.from && eventIsStartAndEndDates.to 
    ? format(eventIsStartAndEndDates.from, "d' de 'LLL").concat(' até ').concat(format(eventIsStartAndEndDates.to, "d' de 'LLL")) 
    : null

    return (
        <div className="h-16 bg-zinc-900 px-4 p rounded-xl flex items-center shadow-shape gap-3">
            <div className='flex items-center gap-2 flex-1'>
                <MapPin className='size-5 text-zinc-400' />
                <input disabled={isGuestInputOpen} type="text" placeholder="Para onde você vai?" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
            </div>

            <button onClick={openDataPicker} disabled={isGuestInputOpen} className='flex items-center gap-2 text-left w-[240px]'>
                <Calendar className='size-5 text-zinc-400' />
                <span className=" text-lg text-zinc-400 w-40 flex-1">
                    {displayedDate || 'Quando?'}
                </span>
            </button>
            
            {isDatePickerOpen && (
                <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
                    <div className='rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
                        <div className='space-y-2'>
                            <div className='flex items-center justify-between'>
                                <h2 className='text-lg font-semibold'>Selecione a data da viagem</h2>
                                <button type='button' onClick={closeDataPicker}>
                                    <X className='size-5 text-zinc-400' />
                                </button>
                            </div>
                        </div>

                        <DayPicker mode="range" selected={eventIsStartAndEndDates} onSelect={setEventIsStartAndEndDates}/>
                    </div>
                </div>
            )}

            <div className='w-px h-6 bg-zinc-800' />

            {isGuestInputOpen ? (
                <Button onClick={closeGuestInput} variant="secondary">
                    Alterar local/data
                    <Settings2 className='size-5' />
                </Button>
            ) : (
                <Button onClick={openGuestInput} variant="primary">
                    Continuar
                    <ArrowRight className='size-5' />
                </Button>
            )}
        </div>
    )
}